import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AudiosRoutingModule } from './audios-routing.module';
import { AudiosFormComponent } from './audios-form/audios-form.component';
import { MatcommonModule } from '../matcommon/matcommon.module';
import { AudiosListComponent } from './audios-list/audios-list.component';


@NgModule({
  declarations: [
    AudiosFormComponent,
    AudiosListComponent
  ],
  imports: [
    CommonModule,
    AudiosRoutingModule,
    MatcommonModule
  ],
  exports: [
    AudiosFormComponent,
    AudiosListComponent
  ]
})
export class AudiosModule { }
