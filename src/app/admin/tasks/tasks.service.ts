import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import mockData from '../../tasks.json';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  createOrEditStatus;
  tasksColumnWidth = 12;
  taskDetailsColumnWidth = 0;
  tasks;
  taskDetailIsActive = false;

  constructor(public router: Router) { }

  fetchTasks() {
   return  of(mockData);
  }

  showTaskDetails(task) {
    this.router.navigateByUrl(`admin/tasks/${task.id}`);
  }

  fetchSingleTask(taskId) {
    const result =  this.tasks.find(task => {
      return task.id === taskId;
    });
    return result;
  }
}
