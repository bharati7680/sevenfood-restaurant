import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'tourist', loadChildren: () => import('./tourist/tourist.module').then(m => m.TouristModule)},
  { path: 'authentication', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)},
  { path: 'admin-panel', loadChildren: () =>import('./admin-panel/admin-panel.module').then(m => m.AdminPanelModule)},
  { path: 'admin-login', loadChildren: () =>import('./admin-login/admin-login.module').then(m => m.AdminLoginModule)},
  { path: 'country', loadChildren: () => import('./country/country-routing.module').then(m => m.CountryRoutingModule)}
  // { path: '', redirectTo: 'dashboard', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
