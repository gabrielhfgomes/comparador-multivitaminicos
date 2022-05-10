import { NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { LayoutComponent } from '../layout/layout.component';
import { AudiosFormComponent } from './audios-form/audios-form.component';
import { AudiosListComponent } from './audios-list/audios-list.component';

const routes: Routes = [
  {
    path: 'audios', component: LayoutComponent, canActivate: [AuthGuard], children: [
      { path: 'form', component: AudiosFormComponent },
      { path: 'list', component: AudiosListComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AudiosRoutingModule implements OnInit {

  ngOnInit(): void { }

}
