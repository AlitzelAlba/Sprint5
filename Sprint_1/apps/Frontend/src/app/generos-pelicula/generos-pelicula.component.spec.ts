import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GenerosPeliculaComponent } from './generos-pelicula.component';
import { Router } from '@angular/router';
import { PLATFORM_ID } from '@angular/core';

describe('GenerosPeliculaComponent', () => {
  let component: GenerosPeliculaComponent;
  let fixture: ComponentFixture<GenerosPeliculaComponent>;
  let routerSpy = { navigate: jasmine.createSpy('navigate') };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenerosPeliculaComponent],
      providers: [
        { provide: PLATFORM_ID, useValue: 'browser' },
        { provide: Router, useValue: routerSpy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(GenerosPeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to selected genre', () => {
    component.verGenero('comedia');
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/listapeliculas', 'comedia']);
  });
});
