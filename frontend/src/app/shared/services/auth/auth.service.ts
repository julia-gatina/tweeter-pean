import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CreateUser } from '../../components/home/create-account/create-account.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseURL = '/api/auth';

  constructor(private http: HttpClient) {}

  public register(newUser: CreateUser): Observable<void> {
    const body = newUser;
    const url = `${this.baseURL}/register`;

    return this.http.post<void>(url, body);
  }
}
