import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AudiosRoutingModule } from './audios-routing.module';
import { AudiosFormComponent } from './audios-form/audios-form.component';
import { MatFormFieldModule  } from '@angular/material/form-field';
import { MatInputModule  } from '@angular/material/input';
import { MatButtonModule  } from '@angular/material/button';
import { MatCard, MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatSelectModule} from '@angular/material/select';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


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
    ReactiveFormsModule,
    MatCardModule,
    FlexLayoutModule,
    MatSelectModule,
    MatProgressSpinnerModule
  ], 
  exports: [
    AudiosFormComponent
  ]
})
export class AudiosModule { }
