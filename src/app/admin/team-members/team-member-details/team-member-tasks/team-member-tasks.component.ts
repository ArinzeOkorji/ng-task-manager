import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamMembersService } from '../../team-members.service';

@Component({
  selector: 'app-team-member-tasks',
  templateUrl: './team-member-tasks.component.html',
  styleUrls: ['./team-member-tasks.component.scss']
})
export class TeamMemberTasksComponent implements OnInit {
  teamMember: any;
  filteredTasks;

  constructor(public route: ActivatedRoute, public teamMembersService: TeamMembersService) { }

  ngOnInit() {
    this.route.parent.paramMap
    .subscribe(param => {
      const teamMemberId = +param.get('team-member-id');
      this.teamMember = this.teamMembersService.fetchSingleTeamMember(teamMemberId);
    });

    this.route.paramMap
    .subscribe(param => {
      const parameter = param.get('status');
      const stringArray = parameter.split('');
      stringArray[0] = stringArray[0].toUpperCase();
      const status = stringArray.join('');
      console.log(status);
      this.filterTasks(status);
    });
  }

  filterTasks(status) {
    console.log(this.teamMember);
    const tasks = this.teamMember.tasks;
    console.log('Tasks:', tasks)
    this.filteredTasks = tasks.filter(task => {
      console.log(task.status, status);
      return task.status === status;
    });
  }

}
