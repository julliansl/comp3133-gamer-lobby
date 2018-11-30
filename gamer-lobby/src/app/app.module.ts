import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { HttpModule } from '@angular/http';
import { AdminComponent } from './admin/admin.component';
import { UsersInviteComponent } from './users/users-invite.component';
import { AdminAddComponent } from './admin/admin-add.component';
import { AdminEditComponent } from './admin/admin-edit.component';

const routes: Routes = [];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    AdminComponent,
    UsersInviteComponent,
    AdminAddComponent,
    AdminEditComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
