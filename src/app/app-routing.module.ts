import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NutricionSuplementosComponent } from './nutricion-suplementos/nutricion-suplementos.component';
import { SuplementosAboutComponent } from './suplementos-about/suplementos-about.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'suplementos',
    pathMatch: 'full'
  },
  {
    path: "suplementos",
    component: NutricionSuplementosComponent
  },
  {
    path: "about",
    component: SuplementosAboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
