import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ViewOneComponent} from './view-one/view-one.component';
import {ViewTwoComponent} from './view-two/view-two.component';
import {ViewThreeComponent} from './view-three/view-three.component';

const routes: Routes = [
  {path: 'view-one', component: ViewOneComponent},
  {path: 'view-two', component: ViewTwoComponent},
  {path: 'view-three', component: ViewThreeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
