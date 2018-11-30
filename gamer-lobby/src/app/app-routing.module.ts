import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin/admin.component';
import { AdminAddComponent } from './admin/admin-add.component';
import { AdminEditComponent } from './admin/admin-edit.component';

const routes: Routes = [
{path:'admin', component: AdminComponent},
{path:'admin/:add', component:AdminAddComponent},
{path:'admin/:edit', component:AdminEditComponent},
{path: '', redirectTo: 'users', pathMatch: 'full'},
{path:'**', redirectTo: 'users', pathMatch:'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
