import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

interface LoginRequest {
  UsersName: string;
  email: string;
  password: string;
}

interface LoginResponse {
  message: string;
  userId: number;
  token?: string;
}

interface RegisterRequest {
  email: string;
  password: string;
  Name: string;
}


interface RegisterResponse {
  message: string;
  userId: number;
}



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:5021/api/auth';

  constructor(private http: HttpClient) {}

  login(credentials: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiUrl}/login`, credentials)
      .pipe(
        catchError(this.handleError)
      );
  }

  register(userData: RegisterRequest): Observable<RegisterResponse> {
  return this.http.post<RegisterResponse>(`${this.apiUrl}/register`, userData)
    .pipe(
      catchError(this.handleError)
    );
}
  private handleError(error: HttpErrorResponse) {
    return throwError(() => error);
  }
}

