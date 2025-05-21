import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPeliculaComponent } from './search-pelicula.component';

describe('SearchPeliculaComponent', () => {
  let component: SearchPeliculaComponent;
  let fixture: ComponentFixture<SearchPeliculaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchPeliculaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchPeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
