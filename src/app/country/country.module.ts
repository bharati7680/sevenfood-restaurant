import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountryRoutingModule } from './country-routing.module';
import { AddCountryComponent } from './components/add-country/add-country.component';
import { CountryListComponent } from './components/country-list/country-list.component';



@NgModule({
  declarations: [
    AddCountryComponent,
    CountryListComponent
  ],
  imports: [
    CommonModule,
    CountryRoutingModule
  ]
})
export class CountryModule { }
