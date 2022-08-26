import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Maintenance } from '../../models/maintenance.model';

@Injectable({
  providedIn: 'root'
})
export class MaintenanceService {
  
  baseUrl = 'http://localhost:3000/maintenance';

  constructor(private http: HttpClient) { }

  getMaintenances(): Observable<Maintenance[]> {
    return this.http.get<Maintenance[]>(this.baseUrl);
  }
}
