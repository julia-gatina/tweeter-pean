import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../../services/dashboard/dashboard.service';
import { map } from 'rxjs';

@Component({
  selector: 'bf-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public persons: any[];
  public adminMessage: string;

  constructor(private dashboardService: DashboardService) {}

  ngOnInit() {}

  public fetchPersons(): void {
    this.dashboardService.getPersons$().subscribe({
      next: (response) => {
        this.persons = response.map((user) => JSON.stringify(user, null, 2));
      },
      error: (error) => {
        console.error('Error details on fetchPersons():', error);
      },
    });
  }

  public fetchAdminMessage(): void {
    this.dashboardService.getAdminMessage$().subscribe({
      next: (response) => {
        this.adminMessage = JSON.stringify(response, null, 2);
      },
      error: (error) => {
        console.error('Error on fetchAdminMessage():', error);
      },
    });
  }
}
