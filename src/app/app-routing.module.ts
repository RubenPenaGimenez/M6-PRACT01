import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './content/body/body.component';
import { InfoComponent } from './content/info/info.component';
import { FormsComponent } from './content/forms/forms.component';

const routes: Routes = [
  { 
    path: 'inicio',
    component: BodyComponent
  },
  {
    path: 'forms',
    component: FormsComponent
  },
  {
    path: 'info',
    component : InfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
