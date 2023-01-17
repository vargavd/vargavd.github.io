// ANGULAR IMPORTS
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

// DATA IMPORTS
import { Project, TASK_STATUS } from 'src/app/helper/data';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss']
})
export class ProjectPageComponent implements OnInit {
  // DATA MODEL
  project: Project;
  chartData: any;
  chartOptions: any;

  // helper properties for template
  taskStatuses = TASK_STATUS;

  // DOM event handlers
  clickOnEditProject() {
    this.router.navigate(['projects', this.project.id, 'edit']);
  }

  constructor(
    private dataService: DataService, 
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const projectId = +this.route.snapshot.params['projectId'];

    this.project = this.dataService.projects.find(p => p.id === projectId);

    // reload project when the param changes
    this.route.params.subscribe((params: Params) => {
      const projectId = +params['projectId'];

      this.project = this.dataService.projects.find(p => p.id === projectId);
    });

    // data for chart
    this.chartData = {
      labels: ['FINISHED', 'IN PROGRESS', 'NOT STARTED'],
      datasets: [
        {
          data: [this.project.getFinishedTasks().length, this.project.getInProgressTasks().length, this.project.getNotStartedTasks().length],
          backgroundColor: [
            "#70b595",
            "#feaf6d",
            "#e9828c"
          ],
          hoverBackgroundColor: [
            "#459e74",
            "#fd9741",
            "#e35b68"
          ]
        }
      ]
    };
    this.chartOptions = {
      plugins: {
        legend: {
          display: false
        }
      }
    };
  }

  

  
}
