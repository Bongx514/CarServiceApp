import { Routes } from '@angular/router';
import { Login } from './pages/Auth/login/login';
import { HomePage } from './pages/Home/home-page/home-page';

export const routes: Routes = [
    {path: '', component: HomePage},
  { path: 'login', component: Login },
  { path: 'login', redirectTo: 'login', pathMatch: 'full' }
];
