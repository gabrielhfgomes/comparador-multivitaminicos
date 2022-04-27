import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AudiosRoutingModule } from './audios-routing.module';
import { AudiosFormComponent } from './audios-form/audios-form.component';
import { MatFormFieldModule  } from '@angular/material/form-field';
import { MatInputModule  } from '@angular/material/input';
import { MatButtonModule  } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AudiosFormComponent
  ],
  imports: [
    CommonModule,
    AudiosRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule
  ], 
  exports: [
    AudiosFormComponent
  ]
})
export class AudiosModule { }
