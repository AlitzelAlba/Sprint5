import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPeliculasComponentComponent } from './lista-peliculas-component.component';

describe('ListaPeliculasComponentComponent', () => {
  let component: ListaPeliculasComponentComponent;
  let fixture: ComponentFixture<ListaPeliculasComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaPeliculasComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaPeliculasComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
