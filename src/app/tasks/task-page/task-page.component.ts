// ANGULAR IMPORTS
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

// CUSTOM SERVICE IMPORTS
import { DataService } from 'src/app/data.service';

// DATA IMPORTS
import { Project, tags, Task, TASK_STATUS } from 'src/app/helper/data';


@Component({
  selector: 'app-task-page',
  templateUrl: './task-page.component.html',
  styleUrls: ['./task-page.component.scss']
})
export class TaskPageComponent implements OnInit {
  // data model
  editedTask: Task;
  project: Project;


  // local references
  @ViewChild('addHours') addHoursInput: ElementRef;
  @ViewChild('addMinutes') addMinutesInput: ElementRef;


  // helper DOM functions
  getHours() {
    return Math.floor(this.editedTask.minutesTracked / 60);
  }
  getMinutes() {
    return this.editedTask.minutesTracked % 60;
  }

  // DOM events
  onGoToProject() {
    this.router.navigate(['/projects', this.project.id]);
  }
  onAddHours() {
    const hoursToAdd = +this.addHoursInput.nativeElement.value;

    this.editedTask.minutesTracked += hoursToAdd*60;

    this.addHoursInput.nativeElement.value = '';
  }
  onAddMinutes() {
    const minutesToAdd = +this.addMinutesInput.nativeElement.value;

    this.editedTask.minutesTracked += minutesToAdd;

    this.addMinutesInput.nativeElement.value = '';
  }
  clickOnTag(tag:string) {
    const tagIndex = this.editedTask.tags.indexOf(tag);

    if (tagIndex === -1) {
      this.editedTask.tags.push(tag);
    } else {
      this.editedTask.tags = this.editedTask.tags.splice(tagIndex, 1)
    }

    console.log(this.editedTask.tags);
  }
  selectedTagsChanged(selectedTags: string[]) {
    this.editedTask.tags = selectedTags;
  }


  constructor(private dataService:DataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const projectId = +this.route.snapshot.params['projectId'];
    const taskId = +this.route.snapshot.params['taskId'];

    this.project = this.dataService.projects.find(p => p.id === projectId);

    this.editedTask = this.project.tasks.find(task => task.id === taskId);
  }


  // FORM OPTIONS
  taskStatuses = Object.values(TASK_STATUS);
  availableTags = tags;
}
