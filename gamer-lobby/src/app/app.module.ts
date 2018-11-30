import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users-list/users.component';
import { AdminComponent } from './admin/admin.component';
import { UsersInviteComponent } from './users/users-invite/users-invite.component';
import { AdminAddComponent } from './admin/admin-add.component';
import { AdminEditComponent } from './admin/admin-edit.component';
import { LoginComponent } from './login/login.component';
import { UsersModule } from './users/users.module';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    AdminComponent,
    UsersInviteComponent,
    AdminAddComponent,
    AdminEditComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    UsersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
