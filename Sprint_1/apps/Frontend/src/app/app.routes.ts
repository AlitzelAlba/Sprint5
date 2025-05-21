import { Routes } from '@angular/router';
import { GenerosPeliculaComponent } from './generos-pelicula/generos-pelicula.component';
import { LoginComponent } from './login/login.component'; // nuevo componente de login
import { RegisterComponent } from './register/register.component';


export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },     // redirige raíz a login
  { path: 'login', component: LoginComponent },              // nueva ruta para login
  { path: 'register', component: RegisterComponent }, // nueva ruta para registro
  { path: 'generos', component: GenerosPeliculaComponent },  // antes era '', ahora se accede solo tras login
  {
    path: 'listapeliculas/:genero',
    loadComponent: () =>
      import('./lista-peliculas-component/lista-peliculas-component.component')
        .then(m => m.ListaPeliculasComponentComponent)
  },
  { path: '**', redirectTo: 'login', pathMatch: 'full' } // cualquier ruta no válida → login
];


