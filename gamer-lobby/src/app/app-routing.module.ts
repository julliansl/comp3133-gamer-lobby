import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './users/users-list/users.component';
import { UsersInviteComponent } from './users/users-invite/users-invite.component';

const routes: Routes = [{path:'users', component: UsersComponent},
{path:'user/:inv', component: UsersInviteComponent},
{path: '', redirectTo: 'users', pathMatch: 'full'},
{path:'**', redirectTo: 'users', pathMatch:'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
