import { Component, OnInit } from '@angular/core';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  tasks;
  filteredTasks;

  constructor(public tasksService: TasksService) { }

  ngOnInit() {
    this.tasksService.fetchTasks()
  .subscribe((res) => {
    this.tasksService.tasks = res;
    this.tasks = this.tasksService.tasks;
    this.filterTasks('all');
  });
  }

  showTaskDetails(task) {
    this.tasksService.showTaskDetails(task);
  }

  filterTasks(status) {
    if (status === 'all' ) {
      this.filteredTasks = this.tasks;
    } else {
      this.filteredTasks = this.tasks.filter(task => {
        return task.status === status;
      });
    }
  }



}
