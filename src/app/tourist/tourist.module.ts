import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TouristRoutingModule } from './tourist-routing.module';
import { ListTouristComponent } from './list-tourist/list-tourist.component';


@NgModule({
  declarations: [
    ListTouristComponent
  ],
  imports: [
    CommonModule,
    TouristRoutingModule
  ]
})
export class TouristModule { }
