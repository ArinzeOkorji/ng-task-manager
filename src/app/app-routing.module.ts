import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AdminComponent } from './admin/admin.component';
import { TasksComponent } from './admin/tasks/tasks.component';
import { TaskDetailsComponent } from './admin/tasks/task-details/task-details.component';
import { CreateTaskComponent } from './admin/tasks/create-task/create-task.component';
import { TeamMemberDetailsComponent } from './admin/team-members/team-member-details/team-member-details.component';
import { CreateTeamMemberComponent } from './admin/team-members/create-team-member/create-team-member.component';
import { TeamMembersComponent } from './admin/team-members/team-members.component';
import { ProfileComponent } from './admin/team-members/team-member-details/profile/profile.component';
import { TeamMemberTasksComponent } from './admin/team-members/team-member-details/team-member-tasks/team-member-tasks.component';
import { TeamMemberComponent } from './team-member/team-member.component';
import { TeamMemberTaskDetailsComponent } from './team-member/task-details/team-member-task-details.component';


const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'admin', component: AdminComponent, children: [
    {path: 'tasks/create-task', component: CreateTaskComponent},
    {path: 'tasks', component: TasksComponent, children: [
      {path: ':task-id', component: TaskDetailsComponent}
    ]},
    {path: 'tasks/:task-id/edit', component: CreateTaskComponent},
    {path: 'team-members/create-team-member', component: CreateTeamMemberComponent},
    {path: 'team-members', component: TeamMembersComponent, children: [
      {path: ':team-member-id', component: TeamMemberDetailsComponent, children: [
        {path: 'profile', component: ProfileComponent},
        {path: 'task/:status', component: TeamMemberTasksComponent}

      ]}
    ]},
    {path: 'team-members/:team-member-id/edit', component: CreateTeamMemberComponent},
  ]},
  {path: 'team-member', component: TeamMemberComponent, children: [
    {path: ':task-id', component: TeamMemberTaskDetailsComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
