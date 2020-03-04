import { Component, OnInit } from '@angular/core';
import { TeamMembersService } from './team-members.service';
import { tap, map } from 'rxjs/operators';

@Component({
  selector: 'app-team-members',
  templateUrl: './team-members.component.html',
  styleUrls: ['./team-members.component.scss']
})
export class TeamMembersComponent implements OnInit {
  teamMembers;

  constructor(public teamMembersService: TeamMembersService) { }

  ngOnInit() {
    this.teamMembersService.fetchTeamMembers()
    .pipe(
      map(res => {
        res.forEach(teamMember => {
          teamMember.pendingTasks = teamMember.tasks.filter(task => {
          return task.status === 'Pending';
          });
          teamMember.completedTasks = teamMember.tasks.filter(task => {
          return task.status === 'Completed';
          });
        });
        return res;
      })
    )
    .subscribe(res => {
      this.teamMembersService.teamMembers = res;
      this.teamMembers = this.teamMembersService.teamMembers;
    });

    // this.teamMembersService.pendingTasks = this.teamMembers.filter(teamMembe)
  }

  showTeamMemberDetails(teamMember) {
    this.teamMembersService.showTeamMemberDetails(teamMember);
  }

}
