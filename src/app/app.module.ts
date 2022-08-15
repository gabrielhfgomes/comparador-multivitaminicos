import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TemplateModule } from './template/template.module';
import { HomeComponent } from './home/home.component';
import { AudiosService } from './services/audios.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AlertService } from './services/alert.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { LayoutComponent } from './layout/layout.component';
import { AuthService } from './services/auth.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { MatCommonModule } from '@angular/material/core';
import { MatcommonModule } from './matcommon/matcommon.module';
import { MultivitaminicoComponent } from './home/multivitaminico/multivitaminico.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LayoutComponent,
    MultivitaminicoComponent
  ],
  imports: [
    MatcommonModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    TemplateModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule
  ],
  exports: [
    ReactiveFormsModule
  ],
  providers: [
    AudiosService,
    AlertService,
    AuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
