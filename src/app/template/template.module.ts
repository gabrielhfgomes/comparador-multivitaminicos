import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { AlertComponent } from './alert/alert.component';
import { AlertService } from '../services/alert.service';

@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    AlertComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [NavbarComponent, SidebarComponent, AlertComponent]
})
export class TemplateModule { }
