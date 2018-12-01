import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { UsersModule } from './users/users.module';
import { AdminModule } from './admin/admin.module';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavBarComponent } from './navigation/nav-bar/nav-bar.component';
import { AdminComponent } from './admin/admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    MatTabsModule,
    BrowserAnimationsModule,
    HttpModule,
    FormsModule,
    UsersModule,
    AdminModule,
    AppRoutingModule
  ],
  exports:[ MatTabsModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
