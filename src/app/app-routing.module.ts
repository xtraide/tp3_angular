import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { EtudiantComponent } from './components/etudiant/etudiant.component';
import { SpecialiteComponent } from './components/specialite/specialite.component';
import { EtudiantsParisComponent } from './components/etudiants-paris/etudiants-paris.component';
import { EtudiantHorsParisComponent } from './components/etudiant-hors-paris/etudiant-hors-paris.component';
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'etudiant', component: EtudiantComponent },
  { path: 'specialite', component: SpecialiteComponent },
  { path: 'etudiant-paris', component: EtudiantsParisComponent },
  { path: 'etudiant-hors-paris', component: EtudiantHorsParisComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
