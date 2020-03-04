import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamMemberTasksComponent } from './team-member-tasks.component';

describe('TeamMemberTasksComponent', () => {
  let component: TeamMemberTasksComponent;
  let fixture: ComponentFixture<TeamMemberTasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamMemberTasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamMemberTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
