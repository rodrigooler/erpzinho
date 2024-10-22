import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login.component';

const productsRoutes: Routes = [
  {
    path: 'products',
    loadComponent: () =>
      import('./pages/products/products.search.component').then(
        (m) => m.ProductsSearchComponent
      ),
  },

  {
    path: 'products/create',
    loadComponent: () =>
      import('./pages/products/products.create-or-edit.component').then(
        (m) => m.ProductsCreateOrEditComponent
      ),
  },

  {
    path: 'products/edit/:id',
    loadComponent: () =>
      import('./pages/products/products.create-or-edit.component').then(
        (m) => m.ProductsCreateOrEditComponent
      ),
  },
];

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },

  ...productsRoutes,
];
