
// Importaciones necesarias para las pruebas
import { ComponentFixture, TestBed } from '@angular/core/testing'; // Herramientas para testing de componentes
import { GenerosPeliculaComponent } from './generos-pelicula.component'; // Componente a probar
import { Router, provideRouter } from '@angular/router'; // Para manejar navegación
import { PLATFORM_ID } from '@angular/core'; // Para identificar la plataforma (browser/server)
import { ActivatedRoute } from '@angular/router'; // Para manejar rutas activas
import { of } from 'rxjs'; // Para crear observables mock
import { By } from '@angular/platform-browser'; // Para interactuar con el DOM en pruebas
import { HttpClientTestingModule } from '@angular/common/http/testing'; // Para mockear HttpClient
import { routes } from '../app.routes'; // Rutas de la aplicación

// Suite de pruebas para GenerosPeliculaComponent
describe('GenerosPeliculaComponent', () => {
  let component: GenerosPeliculaComponent;
  let fixture: ComponentFixture<GenerosPeliculaComponent>;
  let router: Router;

  // Configuración antes de cada prueba
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        GenerosPeliculaComponent, // Importamos el componente standalone
        HttpClientTestingModule // Mock para HttpClient
      ],
      providers: [
        provideRouter(routes), // Configura el router con las rutas de la app
        { provide: PLATFORM_ID, useValue: 'browser' }, // Indica que estamos en navegador
        { 
          provide: ActivatedRoute, 
          useValue: { // Mock de ActivatedRoute con valores por defecto
            params: of({}), // Observable vacío para params
            queryParams: of({}), // Observable vacío para queryParams
            fragment: of({}), // Observable vacío para fragment
            snapshot: { // Mock del snapshot
              params: {},
              queryParams: {},
              fragment: {},
              data: {},
              routeConfig: {},
              url: [],
              root: {} as any
            }
          }
        }
      ]
    }).compileComponents(); // Compila el componente y la plantilla

    // Obtiene la instancia del Router después de configurar el TestBed
    router = TestBed.inject(Router);
    
    // Crea una instancia del componente y detecta cambios iniciales
    fixture = TestBed.createComponent(GenerosPeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Detecta cambios para iniciar el ciclo de vida del componente
  });

  // Prueba básica: verifica que el componente se crea correctamente
  it('should create', () => {
    expect(component).toBeTruthy(); // Comprueba que el componente existe
  });

  // Prueba que verifica la navegación al seleccionar un género
  it('should navigate to selected genre', () => {
    // Espía el método navigate del Router para verificar su llamada
    const navigateSpy = spyOn(router, 'navigate');
    
    // Ejecuta el método que debería disparar la navegación
    component.verGenero('comedia');
    
    // Verifica que navigate fue llamado con los parámetros esperados
    expect(navigateSpy).toHaveBeenCalledWith(['/listapeliculas', 'comedia']);
  });
});