import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'customer',
    loadChildren: () => import('./modules/customer/customer.module').then(module => module.CustomerModule)
  },

  {
    path: 'maintenance',
    loadChildren: () => import('./modules/maintenance/maintenance.module').then(module => module.MaintenanceModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
