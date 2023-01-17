// ANGULAR IMPORTS
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

// PRIME IMPORTS
import { ConfirmationService } from 'primeng/api';

// DATA IMPORTS
import { Task } from 'src/app/helper/data';

// CUSTOM SERVICE IMPORTS
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  // INTPUT - OUTPUT
  @Input() tasks: Task[];
  @Output() taskDeletedEvent = new EventEmitter<number>();

  // DOM events
  deleteTaskHandler(event: {id: number, projectId: number, button: EventTarget}) {
    this.confirmationService.confirm({
      target: event.button,
      message: 'Are you sure you want to delete this task?',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'DELETE',
      acceptIcon: 'pi pi-trash',
      rejectLabel: 'Cancel',
      rejectIcon: 'pi pi-times',
      accept: () => {
          const project = this.dataService.projects.find(p => p.id == event.projectId);

          const indexOfTask = project.tasks.indexOf(project.tasks.find(t => t.id === event.id));

          project.tasks.splice(indexOfTask, 1);

          this.taskDeletedEvent.emit(event.id);
      },
      reject: () => {
          //reject action
      }
    });
  }

  constructor(private confirmationService: ConfirmationService, private dataService: DataService) { }

  ngOnInit(): void {
  }

  
}
