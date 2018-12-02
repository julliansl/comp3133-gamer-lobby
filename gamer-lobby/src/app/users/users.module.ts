import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';

import { UsersComponent } from './users-list/users.component';
import { UsersInviteComponent } from './users-invite/users-invite.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    UsersComponent,
    UsersInviteComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule
  ]
})
export class UsersModule { }
