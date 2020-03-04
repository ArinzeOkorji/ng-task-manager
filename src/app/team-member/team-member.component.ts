import { Component, OnInit } from '@angular/core';
import { TeamMemberService } from './team-member.service';

@Component({
  selector: 'app-team-member',
  templateUrl: './team-member.component.html',
  styleUrls: ['./team-member.component.scss']
})
export class TeamMemberComponent implements OnInit {
  tasks: any;

  constructor(public teamMemberService: TeamMemberService) { }

  ngOnInit() {
    this.teamMemberService.fetchTasks()
    .subscribe(res => {
      this.teamMemberService.tasks = res;
      this.tasks = this.teamMemberService.tasks;
    });
  }

  showTaskDetails(taskId) {
    this.teamMemberService.showTaskDetails(taskId);
  }

}
