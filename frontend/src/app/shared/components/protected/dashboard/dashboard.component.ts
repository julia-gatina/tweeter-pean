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

  constructor(private dashboardService: DashboardService) {}

  ngOnInit() {}

  public fetchPersons(): void {
    console.log('fetchPersons()');
    this.dashboardService.getPersons$().subscribe(
      (response) => {
        this.persons = response.map((user) => JSON.stringify(user, null, 2));
      },
      (error) => {
        console.error('Error details on fetchPersons():', error);
      }
    );
  }
}
