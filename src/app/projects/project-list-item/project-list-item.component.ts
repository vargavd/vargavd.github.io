// ANGULAR IMPORTS
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// DATA IMPORTS
import { Project } from 'src/app/helper/data';


@Component({
  selector: 'app-project-list-item',
  templateUrl: './project-list-item.component.html',
  styleUrls: ['./project-list-item.component.scss']
})
export class ProjectListItemComponent implements OnInit {
  // DATA MODEL
  @Input() project: Project;

  // DOM EVENTS
  clickOnProjectCard() {
    this.router.navigate(['/projects', this.project.id]);
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  
}
