import { Routes } from '@angular/router';

export const ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/main-page/main-page.component').then(
        (m) => m.MainPageComponent
      ),
  },
  {
    path: 'Africa',
    loadComponent: () =>
      import('./components/continents/africa/africa.component').then(
        (m) => m.AfricaComponent
      ),
  },
  {
    path: 'Antarctica',
    loadComponent: () =>
      import('./components/continents/antarctica/antarctica.component').then(
        (m) => m.AntarcticaComponent
      ),
  },
  {
    path: 'Asia',
    loadComponent: () =>
      import('./components/continents/asia/asia.component').then(
        (m) => m.AsiaComponent
      ),
  },
  {
    path: 'Europe',
    loadComponent: () =>
      import('./components/continents/europe/europe.component').then(
        (m) => m.EuropeComponent
      ),
  },
  {
    path: 'North America',
    loadComponent: () =>
      import(
        './components/continents/north-america/north-america.component'
      ).then((m) => m.NorthAmericaComponent),
  },
  {
    path: 'Oceania',
    loadComponent: () =>
      import('./components/continents/oceania/oceania.component').then(
        (m) => m.OceaniaComponent
      ),
  },
  {
    path: 'South America',
    loadComponent: () =>
      import(
        './components/continents/south-america/south-america.component'
      ).then((m) => m.SouthAmericaComponent),
  },
];
