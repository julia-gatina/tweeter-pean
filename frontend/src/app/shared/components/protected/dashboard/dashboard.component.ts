import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../../services/dashboard/dashboard.service';

@Component({
  selector: 'bf-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public persons: any[];

  constructor(private dashboardService: DashboardService) {}

  ngOnInit() {
    this.fetchPersons();
  }

  public fetchPersons(): void {
    console.log('fetchPersons()');
    this.dashboardService.getPersons$().subscribe(
      (response) => {
        this.persons = response;
      },
      (error) => {
        console.log('Error details on fetchPersons():', error);
      }
    );
  }
}
