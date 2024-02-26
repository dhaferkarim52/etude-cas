import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegimeGeneralComponent } from './regime-general/regime-general.component';
import { SalaireRetraiteComponent } from './salaire-retraite/salaire-retraite.component';
import { EntreesSortiesComponent } from './entrees-sorties/entrees-sorties.component';



export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'regime-general', component: RegimeGeneralComponent },
  { path: 'salaire-retraite', component: SalaireRetraiteComponent },
  { path: 'entrees-sorties', component: EntreesSortiesComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: '/not-found' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
export class AppRoutingModule { }