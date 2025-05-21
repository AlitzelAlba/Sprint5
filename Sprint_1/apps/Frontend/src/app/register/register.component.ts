import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../models/login-service.service';  
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule], 
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  // declaramos las propiedades necesarias
  UsersName: string = '';
  email: string = '';
  emailConfirm: string = '';
  password: string = '';
  passwordConfirm: string = '';
  errorMessage: string = '';
  successMessage = '';


    constructor(private authService: AuthService) {}

  onSubmit(): void {
  this.errorMessage = '';
  this.successMessage = '';

  if (this.email !== this.emailConfirm) {
    this.errorMessage = 'Los correos no coinciden.';
    return;
  }

  if (this.password !== this.passwordConfirm) {
    this.errorMessage = 'Las contraseñas no coinciden.';
    return;
  }

  const userData = {
    email: this.email,
    password: this.password,
    Name: this.UsersName  // Asegúrate de que esto se llama "Name" (con N mayúscula)
  };

  this.authService.register(userData).subscribe({
    next: (res) => {
      this.successMessage = 'Usuario registrado con éxito.';
      console.log(res);
      // puedes redirigir o limpiar campos si lo deseas
    },
    error: (err) => {
      this.errorMessage = 'Error al registrar usuario.';
      console.error(err);
    }
  });
}

}

