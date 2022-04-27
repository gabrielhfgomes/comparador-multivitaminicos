import { NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Audio } from './audio.model';
import { AudiosFormComponent } from './audios-form/audios-form.component';

const routes: Routes = [
  { path: 'audios-form', component: AudiosFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AudiosRoutingModule implements OnInit { 

  audio: Audio;

  ngOnInit() : void {

  }




}
