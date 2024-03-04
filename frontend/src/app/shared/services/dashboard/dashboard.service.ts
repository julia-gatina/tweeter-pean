import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private baseURL = '/api';

  constructor(private http: HttpClient) {}

  public getPersons$(): Observable<any[]> {
    const url = `${this.baseURL}/person/all`;
    return this.http.get<any[]>(url);
  }

  public getAdminMessage$(): Observable<{ secureMessage: string }> {
    const url = `${this.baseURL}/person/admin`;
    return this.http.get<{ secureMessage: string }>(url);
  }
}
