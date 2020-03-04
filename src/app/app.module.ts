import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AdminComponent } from './admin/admin.component';
import { TasksComponent } from './admin/tasks/tasks.component';
import { TaskDetailsComponent } from './admin/tasks/task-details/task-details.component';
import { CreateTaskComponent } from './admin/tasks/create-task/create-task.component';
import { TeamMembersComponent } from './admin/team-members/team-members.component';
import { TeamMemberDetailsComponent } from './admin/team-members/team-member-details/team-member-details.component';
import { CreateTeamMemberComponent } from './admin/team-members/create-team-member/create-team-member.component';
import { ProfileComponent } from './admin/team-members/team-member-details/profile/profile.component';
import { TeamMemberTasksComponent } from './admin/team-members/team-member-details/team-member-tasks/team-member-tasks.component';
import { TeamMemberComponent } from './team-member/team-member.component';
import { TeamMemberTaskDetailsComponent } from './team-member/task-details/team-member-task-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LandingPageComponent,
    AdminComponent,
    TasksComponent,
    TaskDetailsComponent,
    CreateTaskComponent,
    TeamMembersComponent,
    TeamMemberDetailsComponent,
    CreateTeamMemberComponent,
    ProfileComponent,
    TeamMemberTasksComponent,
    TeamMemberComponent,
    TeamMemberTaskDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
