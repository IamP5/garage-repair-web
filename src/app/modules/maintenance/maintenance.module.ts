import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaintenanceRoutingModule } from './maintenance-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MaintenanceCarCardComponent } from './components/maintenance-car-card/maintenance-car-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';



@NgModule({
  declarations: [
    DashboardComponent,
    MaintenanceCarCardComponent
  ],
  imports: [
    CommonModule,
    MaintenanceRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule
  ]
})
export class MaintenanceModule { }
