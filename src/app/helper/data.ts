// 3rd PARTY IMPORTS
import { LoremIpsum } from "lorem-ipsum";

// SOME HELPERS OBJECTS
export const tags:string[] = ['Aesenum', 'Gevoida', 'Poracum', 'Esoveicum', 'Inventore', 'Neque', 'Adipisicing', 'Nobis'];

export const loremGenerator = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 10,
    min: 4
  }
});

// TASK EXPORTS
export enum TASK_STATUS {
  NOT_STARTED = 'Not Started',
  IN_PROGRESS = 'In Progress',
  FINISHED = 'Finished'
};

export const getTaskStatusStrings = () => {
  return Object.keys(TASK_STATUS).filter(status => isNaN(Number(status)));
};

export class Task {
  constructor(
    public id: number,
    public projectId: number,
    public title: string,
    public description: string,
    public minutesTracked: number, // minutes
    public status: TASK_STATUS,
    public tags: string[]
  ) {}

  getTimeString() {
    const hours = Math.floor(this.minutesTracked / 60);
    const minutes = this.minutesTracked % 60;

    // padding 0s
    const minutes_string = minutes > 9 ? minutes.toString() : `0${minutes}`;

    return `${hours}h ${minutes_string}m`;
  }
};


// PROJECT EXPORTS
export class Project {
  constructor(
    public id: number,
    public title: string,
    public description: string,
    public tags: string[],
    public tasks: Task[]
  ) {}
  

  getExcerpt():string {
    return this.description.length > 100 ? 
      (this.description.slice(0, 100).trim() + '...') : 
      this.description;
  }

  getNotStartedTasks():Task[] {
    return this.tasks.filter(task => task.status === TASK_STATUS.NOT_STARTED);
  }
  getInProgressTasks():Task[] {
    return this.tasks.filter(task => task.status === TASK_STATUS.IN_PROGRESS);
  }
  getFinishedTasks():Task[] {
    return this.tasks.filter(task => task.status === TASK_STATUS.FINISHED);
  }

  getTimeTracked():string {
    const allTimeTrackedInMinutes = this.tasks
      .map(task => task.minutesTracked)
      .reduce((sumTimeTracked:number, currentTimeTracked:number) => sumTimeTracked + currentTimeTracked, 0);

    return Math.floor(allTimeTrackedInMinutes / 60) + 'h ' + (allTimeTrackedInMinutes % 60) + 'm';
  }
};


// USER EXPORTS
export enum DEVELOPER_LEVEL {
  JUNIOR = 'Junior', 
  MEDIOR = 'Medior', 
  SENIOR = 'Senior', 
  LEAD = 'Lead'
};
export type UserModel = {
  userName: string;
  firstName: string;
  lastName: string;
  email: string;
  devLevel: DEVELOPER_LEVEL;
  about: string;
}

