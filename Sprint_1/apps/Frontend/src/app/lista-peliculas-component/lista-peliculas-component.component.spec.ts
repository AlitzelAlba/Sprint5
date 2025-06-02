import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ListaPeliculasComponentComponent } from './lista-peliculas-component.component';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { TmdbService } from '../services/tmdb.service'; 
import { of } from 'rxjs';

describe('ListaPeliculasComponentComponent', () => {
  let component: ListaPeliculasComponentComponent;
  let fixture: ComponentFixture<ListaPeliculasComponentComponent>;

  // Mock de datos que coincide con lo que espera tu componente
  const mockPeliculasData = {
    accion: [
      { id: 1, nombre: 'Pelicula 1' },
      { id: 2, nombre: 'Pelicula 2' }
    ],
    comedia: [
      { id: 3, nombre: 'Pelicula 3' }
    ]
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ListaPeliculasComponentComponent,
        HttpClientTestingModule,
        RouterTestingModule // import del RouterLink
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of({
              get: (key: string) => 'accion' // Simulamos que siempre retorna 'accion'
            })
          }
        },
        {
          provide: TmdbService,
          useValue: {
            getTodasLasPeliculas: () => of(mockPeliculasData) // Mock exacto de lo que espera el componente
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ListaPeliculasComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Sirve para ejecutar ngOnInit y otros ciclos de vida del componente de forma segura
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load peliculas for genre', () => {
    expect(component.peliculas.length).toBe(2); // Verifica que cargó las 2 películas de acción
    expect(component.peliculas[0].nombre).toBe('Pelicula 1');
  });
});