import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'assets'; // Répertoire des fichiers JSON locaux

  constructor(private http: HttpClient) { }

  login(credentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login-response.json`, credentials);
  }

  signUp(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/signup-response.json`, user);
  }
}
