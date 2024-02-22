import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../../services/dashboard/dashboard.service';

@Component({
  selector: 'bf-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
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
