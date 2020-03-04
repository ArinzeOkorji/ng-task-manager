import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamMembersService } from '../../team-members.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  teamMember;
  teamMemberId: number;

  constructor(public route: ActivatedRoute, public teamMembersService: TeamMembersService) { }

  ngOnInit() {
    this.route.parent.paramMap
    .subscribe(param => {
      console.log(param)
      this.teamMemberId = +param.get('team-member-id');
      this.teamMember = this.teamMembersService.fetchSingleTeamMember(this.teamMemberId);
      console.log(this.teamMember)


    });
  }

}
