import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TemplateModule } from './template/template.module';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { LayoutComponent } from './layout/layout.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { MatCommonModule } from '@angular/material/core';
import { MatcommonModule } from './matcommon/matcommon.module';
import { MultivitaminicoComponent } from './home/multivitaminico/multivitaminico.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgChartsModule } from 'ng2-charts';
import { BarChartComponent } from './home/bar-chart/bar-chart.component';
import { AdsenseModule } from 'ng2-adsense';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LayoutComponent,
    MultivitaminicoComponent,
    BarChartComponent
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
    MatFormFieldModule,
    NgChartsModule,
    // shown passing global defaults (optional)
    AdsenseModule.forRoot({
      adClient: 'ca-pub-2592409107142671',
      adSlot: 3680418353,
    }),
  ],
  exports: [
    ReactiveFormsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
