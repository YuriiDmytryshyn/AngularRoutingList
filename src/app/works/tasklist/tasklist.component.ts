import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.scss']
})
export class TasklistComponent implements OnInit {

  numberOfTanks: number = 0;
  task: string;
  is: boolean = false;
  progress = "In PROGRESS";
  progressColor = "red";
  tasks: Array<any> = [];

  constructor() { }

  ngOnInit(): void {
  }

  sendTheTask(): void {
    if (this.task.length !== 0) {
      const task = {
        number: this.tasks.length + 1,
        taskA: this.task,
        isselected: this.is,
        progress: this.progress,
        progressColor: this.progressColor
      };
      this.numberOfTanks = task.number;
      this.tasks.push(task);
      this.task = '';
    }
  }

  getNumber(n: number): void {
    this.numberOfTanks = n;
  }

}
