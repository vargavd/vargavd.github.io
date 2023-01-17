// AMGULAR IMPORTS
import { Component, OnInit } from '@angular/core';

// DATA IMPORTS
import { Task } from '../helper/data';

// CUSTOM SERVICES
import { DataService } from '../data.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  // DATA MODEL
  tasks: Task[] = [];

  // public funcs
  removeTask(taskId: number) {
    const taskIndex = this.tasks.findIndex(t => t.id === taskId);

    this.tasks.splice(taskIndex, 1);
  }

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.projects.forEach(project => {
      this.tasks.push(...project.tasks);
    });
  }
}
