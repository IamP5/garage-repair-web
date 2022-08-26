import { Component, OnInit } from '@angular/core';
import { Maintenance } from 'src/app/core/models/maintenance.model';
import { MaintenanceService } from 'src/app/core/services/maintenance/maintenance.service';
import { StatusChangeEvent } from '../../components/maintenance-car-card/maintenance-car-card.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  maintenances!: Maintenance[];

  doneMaintenances: Maintenance[] = [];
  waitingMaintenances: Maintenance[] = [];
  progressMaintenances: Maintenance[] = [];

  constructor(private maintenanceService: MaintenanceService) {
    this.getMaintenances();
  }

  ngOnInit(): void {
  }

  getMaintenances() {
    this.maintenanceService.getMaintenances()
      .subscribe(maintenances => {
        this.maintenances = maintenances;
        this.filterMaintenances();
      })
  }

  filterMaintenances() {
    this.doneMaintenances = this.maintenances
      .filter(maintenance => maintenance.status === 'DONE');

    this.progressMaintenances = this.maintenances
      .filter(maintenance => maintenance.status === 'IN_PROGRESS');

    this.waitingMaintenances = this.maintenances
      .filter(maintenance => maintenance.status === 'WAITING');
  }

  changeStatus(e: StatusChangeEvent) {
    if(e.toStatus === 'IN_PROGRESS') {
      this.progressMaintenances.push(e.maintenance);

      this.waitingMaintenances = this.waitingMaintenances
        .filter(maintenance => maintenance.id !== e.maintenance.id);

      return
    }

    this.doneMaintenances.push(e.maintenance);

    this.progressMaintenances = this.progressMaintenances
      .filter(maintenance => maintenance.id !== e.maintenance.id);
  }
}
