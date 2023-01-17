// ANGULAR IMPORTS
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

// DATA IMPORTS
import { Task } from 'src/app/helper/data';

@Component({
  selector: 'app-task-list-item',
  templateUrl: './task-list-item.component.html',
  styleUrls: ['./task-list-item.component.scss'],
})
export class TaskListItemComponent implements OnInit {
  // INPUT - OUTPUT
  @Input() task: Task;
  @Output() deleteTask = new EventEmitter<{id: number, projectId: number, button: EventTarget}>();


  // DOM events
  clickOnDeleteButton(event: Event) {
    this.deleteTask.emit({id: this.task.id, projectId: this.task.projectId, button: event.target});
  }
  clickOnEdit() {
    this.router.navigate(['projects', this.task.projectId, 'tasks', this.task.id]);
  }
  

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  

}
