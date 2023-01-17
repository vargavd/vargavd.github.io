// ANGULAR IMPORTS
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

// CUSTOM SERVICE IMPORTS
import { DataService } from 'src/app/data.service';

// DATA IMPORTS
import { Project } from 'src/app/helper/data';


@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.scss']
})
export class ProjectEditComponent implements OnInit {
  // DATA MODEl
  project: Project;

  // UI MODEL
  newTaskModalVisible: boolean;

  // DOM events
  selectedTagsChanged(selectedTags: string[]) {
    this.project.tags = selectedTags;
  }
  clickOnBackToProject() {
    this.router.navigate(['projects', this.project.id]);
  }
  clickOnAddTask() {
    this.newTaskModalVisible = true;
  }

  constructor(private route: ActivatedRoute, private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    this.newTaskModalVisible = false;

    const projectId = +this.route.snapshot.params['projectId'];

    this.project = this.dataService.projects.find(p => p.id === projectId);

    // reload project when the param changes
    this.route.params.subscribe((params: Params) => {
      const projectId = +params['projectId'];

      this.project = this.dataService.projects.find(p => p.id === projectId);
    });
  }

  
}
