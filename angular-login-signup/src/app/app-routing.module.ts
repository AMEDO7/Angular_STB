import { NgModule } from '@angular/core'; // Importation de la décoration NgModule d'Angular
import { RouterModule, Routes } from '@angular/router'; // Importation de RouterModule et Routes pour la configuration du routage
import { LoginComponent } from './login/login.component'; // Importation du composant LoginComponent
import { SignUpComponent } from './sign-up/sign-up.component'; // Importation du composant SignUpComponent

// Déclaration des routes de l'application
const routes: Routes = [
  { path: 'login', component: LoginComponent }, // Route pour le chemin 'login' qui affiche le LoginComponent
  { path: 'sign-up', component: SignUpComponent }, // Route pour le chemin 'sign-up' qui affiche le SignUpComponent
  { path: '', redirectTo: '/login', pathMatch: 'full' } // Route par défaut qui redirige vers la page de connexion
];

export const AppRoutingModule = RouterModule.forRoot(routes); // Exportation de AppRoutingModule en utilisant RouterModule.forRoot() avec les routes définies
