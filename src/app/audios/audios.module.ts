import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AudiosRoutingModule } from './audios-routing.module';
import { AudiosFormComponent } from './audios-form/audios-form.component';
import { MatcommonModule } from '../matcommon/matcommon.module';


@NgModule({
  declarations: [
    AudiosFormComponent
  ],
  imports: [
    CommonModule,
    AudiosRoutingModule,
    MatcommonModule
  ],
  exports: [
    AudiosFormComponent
  ]
})
export class AudiosModule { }
