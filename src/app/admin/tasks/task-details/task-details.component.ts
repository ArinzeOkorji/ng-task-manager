import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss']
})
export class TaskDetailsComponent implements OnInit, OnDestroy {
  taskId: number;
  task: any;

  constructor(private route: Router, private router: ActivatedRoute, private tasksService: TasksService) { }

  ngOnInit() {
    this.tasksService.tasksColumnWidth = 8;
    this.tasksService.taskDetailsColumnWidth = 4;
    this.router.paramMap
    .subscribe(param => {
      console.log(param);
      this.taskId = +param.get('task-id');
      console.log(this.taskId);
      this.getTask(this.taskId);
    });
  }

  getTask(taskId) {
    this.task = this.tasksService.fetchSingleTask(taskId);
    console.log(this.task);
  }

  close() {
    this.route.navigate(['admin/tasks']);
  }

  ngOnDestroy() {
    this.tasksService.tasksColumnWidth = 12;
    this.tasksService.taskDetailsColumnWidth = 0;
  }

  editTask(taskId) {
    this.tasksService.createOrEditStatus = 'Edit';
    this.route.navigate(['admin', 'tasks', taskId, 'edit']);
  }

}
