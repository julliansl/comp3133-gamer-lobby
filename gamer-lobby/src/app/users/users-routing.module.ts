import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './users-list/users.component';
import { UsersInviteComponent } from './users-invite/users-invite.component';

const routes: Routes = [
  {path: 'users', component: UsersComponent},
  {path: 'invite/:username', component: UsersInviteComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
