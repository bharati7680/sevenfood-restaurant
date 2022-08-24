import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListTouristComponent } from './list-tourist/list-tourist.component';

const routes: Routes = [
  { path: 'list', component: ListTouristComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TouristRoutingModule { }
