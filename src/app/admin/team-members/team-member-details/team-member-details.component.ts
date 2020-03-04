import { Component, OnInit, OnDestroy } from '@angular/core';
import { TeamMembersService } from '../team-members.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-team-member-details',
  templateUrl: './team-member-details.component.html',
  styleUrls: ['./team-member-details.component.scss']
})
export class TeamMemberDetailsComponent implements OnInit, OnDestroy {
  teamMemberId: number;

  constructor(public teamMembersService: TeamMembersService, public router: ActivatedRoute, public route: Router) { }

  ngOnInit() {
    this.teamMembersService.teamMembersColumnWidth = 8;
    this.teamMembersService.teamMembersDetailsColumnWidth = 4;
    this.router.paramMap
    .subscribe(param => {
      console.log(param);
      this.teamMemberId = +param.get('team-member-id');
      /* console.log(this.taskId); */
      /* this.getTask(this.taskId); */
    });
  }

  close() {
    this.route.navigate(['admin', 'team-members']);
  }

  ngOnDestroy() {
    this.teamMembersService.teamMembersColumnWidth = 12;
    this.teamMembersService.teamMembersDetailsColumnWidth = 0;
  }

}
