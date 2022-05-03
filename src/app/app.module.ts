import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TemplateModule } from './template/template.module';
import { HomeComponent } from './home/home.component';
import { AudiosModule } from './audios/audios.module';
import { FormsModule } from '@angular/forms';
import { AudiosService } from './services/audios.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AlertService } from './services/alert.service';
import { LoginComponent } from './login/login.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { LayoutComponent } from './layout/layout.component';
import { AuthService } from './services/auth.service';
import { TokenInterceptor } from './token.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TemplateModule,
    AudiosModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [
    AudiosService, 
    AlertService, 
    AuthService, 
    { 
      provide: HTTP_INTERCEPTORS, 
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
