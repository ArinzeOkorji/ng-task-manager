import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamMemberTaskDetailsComponent } from './team-member-task-details.component';

describe('TeamMemberTaskDetailsComponent', () => {
  let component: TeamMemberTaskDetailsComponent;
  let fixture: ComponentFixture<TeamMemberTaskDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamMemberTaskDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamMemberTaskDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
