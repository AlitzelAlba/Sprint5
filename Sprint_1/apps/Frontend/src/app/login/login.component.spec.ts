import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LoginComponent } from './login.component';
import { provideRouter, Router } from '@angular/router';
import { routes } from '../app.routes'; 
import { AuthService } from '../models/login-service.service';
import { of } from 'rxjs';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authService: AuthService;
  let router: Router;

  const mockAuthService = {
    login: jasmine.createSpy('login').and.returnValue(of({
      token: 'mock-token'
    }))
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        LoginComponent,
        HttpClientTestingModule
      ],
      providers: [
        provideRouter(routes), // Configuración del router
        { provide: AuthService, useValue: mockAuthService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthService);
    router = TestBed.inject(Router);
    spyOn(router, 'navigate'); // Espía el método navigate del router
    fixture.detectChanges();
  });
// Tests para el componente LoginComponent
  it('should create', () => {
    expect(component).toBeTruthy();
  });
// Verifica que el componente se crea correctamente
  it('should call authService.login on form submit', () => {
    component.UsersName = 'testuser';
    component.email = 'test@example.com';
    component.password = 'password';
    
    const event = new Event('submit');
    component.login(event);
    
    expect(mockAuthService.login).toHaveBeenCalledWith({
      UsersName: 'testuser',
      email: 'test@example.com',
      password: 'password'
    });
  });
// Verifica que se llama al método login del servicio de autenticación con los datos correctos
  it('should navigate to /generos on successful login', () => {
    const event = new Event('submit');
    component.login(event);
    
    expect(router.navigate).toHaveBeenCalledWith(['/generos']);
  });
// Verifica que se navega a la ruta /generos después de un inicio de sesión exitoso
  it('should navigate to /register when register is called', () => {
    const event = new Event('submit');
    component.register(event);
    
    expect(router.navigate).toHaveBeenCalledWith(['/register']);
  });
});