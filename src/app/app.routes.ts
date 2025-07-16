import { Routes } from '@angular/router';

export const routes: Routes = [
    {
       path: "home",
    loadComponent: () => import('./content1/content1.component').then(m => m.Content1Component),
        pathMatch: "full",
    },
    {
       path: "accesso",
    loadComponent: () => import('./content2/content2.component').then(m => m.Content2Component),
        pathMatch: "full",
    },
    {
       path: "content3",
       loadComponent: () => import('./content3/content3.component').then(m => m.Content3Component),
       pathMatch: "full",
    },
    {
        path: "",
        redirectTo: "home",
        pathMatch: "full",
    },
];
