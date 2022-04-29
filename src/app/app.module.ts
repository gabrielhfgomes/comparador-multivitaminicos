import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TemplateModule } from './template/template.module';
import { HomeComponent } from './home/home.component';
import { AudiosModule } from './audios/audios.module';
import { FormsModule } from '@angular/forms';
import { AudiosService } from './services/audios.service';
import { HttpClientModule } from '@angular/common/http';
import { AlertService } from './services/alert.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    BrowserAnimationsModule,
    TemplateModule,
    AudiosModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AudiosService, AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
