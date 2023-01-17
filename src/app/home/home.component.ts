import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Project } from '../helper/data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  projects: Project[];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.projects = this.dataService.projects.slice(0, 3);
  }

}
