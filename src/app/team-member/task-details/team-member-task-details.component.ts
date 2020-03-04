import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamMemberService } from '../team-member.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './team-member-task-details.component.html',
  styleUrls: ['./team-member-task-details.component.scss']
})
export class TeamMemberTaskDetailsComponent implements OnInit, OnDestroy {
  @ViewChild('pending', {static: true}) public pendingOption: ElementRef;
  @ViewChild('completed', {static: true}) public completedOption: ElementRef;
  task: any;

  constructor(private router: Router, private route: ActivatedRoute, private teamMemberService: TeamMemberService) { }

  ngOnInit() {
    this.teamMemberService.tasksColumnWidth = 7;
    this.teamMemberService.taskDetailsColumnWidth = 4;
    this.route.paramMap
    .subscribe(param => {
      const taskId = +param.get('task-id');
      this.getTask(taskId);

      if ( this.task.status === 'Pending') {
        this.pendingOption.nativeElement.setAttribute('selected', true);
      } else if (this.task.status === 'Completed') {
        this.completedOption.nativeElement.setAttribute('selected', true);

      }
    });
  }

  getTask(taskId) {
    this.task = this.teamMemberService.fetchSingleTask(taskId);
  }

  close() {
    this.router.navigate(['team-member']);
  }

  ngOnDestroy() {
    this.teamMemberService.tasksColumnWidth = 12;
    this.teamMemberService.taskDetailsColumnWidth = 0;
  }

}
