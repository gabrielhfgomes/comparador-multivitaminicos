import { NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { AudiosFormComponent } from './audios-form/audios-form.component';

const routes: Routes = [
  { path: 'audios', component: LayoutComponent, children: [
    { path: 'form', component: AudiosFormComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AudiosRoutingModule implements OnInit { 

  ngOnInit() : void {}

}
