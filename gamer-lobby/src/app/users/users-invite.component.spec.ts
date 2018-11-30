import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersInviteComponent } from './users-invite.component';

describe('UsersInviteComponent', () => {
  let component: UsersInviteComponent;
  let fixture: ComponentFixture<UsersInviteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersInviteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersInviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
