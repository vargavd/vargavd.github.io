// angular imports
import { Component, OnInit } from '@angular/core';
import { Project } from '../helper/data';

// services
import { DataService } from '../data.service';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  // DATA (MODEL)
  projects: Project[];

  // UI MODEL
  newProjectModalVisible: boolean;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.projects = this.dataService.projects;
    this.newProjectModalVisible = false;
  }
}
