import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Maintenance } from 'src/app/core/models/maintenance.model';

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
    "DONE": null,
    "WAITING": 'IN_PROGRESS',
    "IN_PROGRESS": 'DONE'
  };

  constructor() { }

  ngOnInit(): void {
  }

  handleMoveButton(maintenance: Maintenance, toStatus: string) {
    this.maintenance.status = this.statusChange[this.maintenance.status];
    console.log(this.maintenance.status);
    this.changeStatus.emit({
      maintenance,
      toStatus
    });
  }
}
