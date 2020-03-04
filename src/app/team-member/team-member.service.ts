import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import taskData from '../tasks.json';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TeamMemberService {
  tasks;
  tasksColumnWidth = 12;
  taskDetailsColumnWidth = 0;

  constructor(private router: Router) { }

  fetchTasks() {
    return of(taskData);
  }

  fetchSingleTask(taskId) {
    const result =  this.tasks.find(task => {
      return task.id === taskId;
    });
    return result;
  }

  showTaskDetails(taskId) {
    this.router.navigate(['team-member', `${taskId}`]);
  }
}
