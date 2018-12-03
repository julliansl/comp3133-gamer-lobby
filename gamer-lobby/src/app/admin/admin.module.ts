import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';

import { AdminComponent } from './admin/admin.component';
import { AdminAddComponent } from './admin-add/admin-add.component';
import { AdminEditComponent } from './admin-edit/admin-edit.component';

import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  declarations: [
    AdminComponent,
    AdminAddComponent,
    AdminEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatTabsModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
