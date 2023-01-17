import { Injectable } from "@angular/core";

// DATA IMPORTS
import { TASK_STATUS, Task, Project, tags, loremGenerator, getTaskStatusStrings } from "./helper/data";

// HELPER FUNCS
import { getRandomInteger, getRandomElementsFromList } from "./helper/helper-funcs";


@Injectable()
export class DataService {
  projects: Project[] = [];

  private nextTaskId: number = 1;

  // private functions
  private generateTasks(projectId: number, minimum: number = 3, maximum: number = 6):Task[] {
    const tasks:Task[] = [];

    for (let i = 0; i < 10 + getRandomInteger(10); i++) {
      tasks.push(new Task(
        this.nextTaskId, // id
        projectId, // project id
        `Task Title ${i} (Project ${projectId})`, // title
        loremGenerator.generateSentences(4), // description
        (getRandomInteger(4, true) * 60) + ((getRandomInteger(4, true) * 15)), // minutesTracked
        Object.values(TASK_STATUS)[getRandomInteger(getTaskStatusStrings().length)], // status
        getRandomElementsFromList(tags) // tags
      ));

      this.nextTaskId++;
    }
  
    return tasks;
  }

  // public functions
  public addProject(title: string, description: string, tags: string[]):number {
    let nextProjectId = Math.max(...this.projects.map(p => p.id)) + 1;

    this.projects.push(new Project (
      nextProjectId, // id
      title, // title
      description, // description
      tags, // tags
      [], // tasks
    ));

    return nextProjectId;
  }
  public addTask(projectId: number, title: string, description: string, status: TASK_STATUS = TASK_STATUS.NOT_STARTED) {
    const project = this.projects.find(p => p.id === projectId);

    project.tasks.push(new Task(
      this.nextTaskId++, // id
      projectId, // project id
      title, // title
      description, // description
      0, // minutesTracked
      status, // status
      [] // tags
    ));
  }

  constructor() {
    for (let index = 0; index < 15; index++) {
      this.projects.push(new Project (
        index, // id
        `Project Title ${index}`, // title
        loremGenerator.generateSentences(15), // description
        getRandomElementsFromList(tags), // tags
        this.generateTasks(index), // tasks
      ));
    }
  }
}