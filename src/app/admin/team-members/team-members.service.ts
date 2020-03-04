import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import teamMembersData from '../../team-members.json';

@Injectable({
  providedIn: 'root'
})
export class TeamMembersService {
  teamMembers;
  pendingTasks: [];
  completedTasks: [];
  teamMembersColumnWidth = 12;
  teamMembersDetailsColumnWidth = 0;

  constructor(private router: Router, private route: ActivatedRoute) { }

  showTeamMemberDetails(teamMember: any) {
    this.router.navigate(['admin', 'team-members', `${teamMember}`, 'profile']);
  }

  fetchTeamMembers() {
    return of(teamMembersData);
  }

  fetchSingleTeamMember(teamMemberId) {
    const result =  this.teamMembers.find(teamMember => {
      return teamMember.id === teamMemberId;
    });
    return result;
  }

  fetchParentRouteParam() {
    return this.route.parent.paramMap;
  }
}
