import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Maintenance } from 'src/app/core/models/maintenance.model';
import { MaintenanceService } from 'src/app/core/services/maintenance/maintenance.service';

export interface StatusChangeEvent {
  maintenance: Maintenance;
  toStatus: string;
}

@Component({
  selector: 'app-maintenance-car-card',
  templateUrl: './maintenance-car-card.component.html',
  styleUrls: ['./maintenance-car-card.component.scss']
})
export class MaintenanceCarCardComponent implements OnInit {
  @Input()
  maintenance!: Maintenance;

  @Output()
  changeStatus = new EventEmitter<StatusChangeEvent>();

  statusChange: any = {
    "DONE": 'WAITING',
    "WAITING": 'IN_PROGRESS',
    "IN_PROGRESS": 'DONE'
  };

  constructor(private maintenanceService: MaintenanceService) { }

  ngOnInit(): void {

  }

  handleMoveButton(toStatus: string) {
    const newStatus = this.statusChange[this.maintenance.status];

    this.maintenanceService.updateMaintenance(this.maintenance.id, newStatus).subscribe({
      next: response => {
        this.changeStatus.emit({
          maintenance: response,
          toStatus
        });
      },
      error: err => console.log(err)
    })
  }
}
