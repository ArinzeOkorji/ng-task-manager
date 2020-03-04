import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent implements OnInit, OnDestroy {
  @ViewChild('pending', {static: true}) public pendingOption: ElementRef;
  @ViewChild('completed', {static: true}) public completedOption: ElementRef;
  task;
  taskName = '';
  assignedTo = '';
  deadline;
  description = '';
  status;

  constructor(
    public activatedRoute: ActivatedRoute,
    public tasksService: TasksService
  ) {}

  ngOnInit() {
    console.log(this.activatedRoute.snapshot.url);
    this.activatedRoute.paramMap.subscribe(param => {
      const id = +param.get('task-id');

      if (id) {
        this.task = this.tasksService.fetchSingleTask(id);
        this.taskName = this.task.task;
        this.assignedTo = this.task.assignedTo;
        this.deadline = new Date(this.task.deadline);
        this.description = this.task.description;
        this.status = this.task.status;

        if ( this.status === 'Pending') {
          this.pendingOption.nativeElement.setAttribute('selected', true);
        } else if (this.status === 'Completed') {
          this.completedOption.nativeElement.setAttribute('selected', true);

        }

        console.log(this.deadline);
      } else {
        this.task = undefined;
      }
    });
  }

  ngOnDestroy() {
    this.taskName = '';
    this.assignedTo = '';
    this.deadline = '';
    this.description = '';
  }
}
