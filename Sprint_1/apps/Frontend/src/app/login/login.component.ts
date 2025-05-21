
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../models/login-service.service'; 


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  UsersName: string = '';
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login(event: Event) {
    event.preventDefault();

    this.authService.login({ UsersName: this.UsersName, email: this.email, password: this.password }).subscribe({
      next: (response) => {
        console.log('Login exitoso:', response);
        localStorage.setItem('token', response.token ?? ''); 
        this.router.navigate(['/generos']);
      },
      error: (error) => {
        if (error.status === 401) {
          this.errorMessage = 'Credenciales inválidas';
        } else {
          this.errorMessage = 'Ocurrió un error al intentar iniciar sesión.';
        }
      }
    });
  }
  
  register(event: Event) {
    console.log('Register button clicked');
    event.preventDefault();
    this.router.navigate(['/register']);
  }

}

