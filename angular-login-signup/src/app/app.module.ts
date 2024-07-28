import { NgModule } from '@angular/core'; // Importation de la décoration NgModule d'Angular
import { BrowserModule } from '@angular/platform-browser'; // Importation du module BrowserModule pour les applications web
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Importation de BrowserAnimationsModule pour les animations Angular
import { FormsModule } from '@angular/forms'; // Importation de FormsModule pour les formulaires Angular
import { HttpClientModule } from '@angular/common/http'; // Importation de HttpClientModule pour les communications HTTP
import { MatCardModule } from '@angular/material/card'; // Importation du module MatCardModule de Angular Material pour les cartes
import { MatFormFieldModule } from '@angular/material/form-field'; // Importation du module MatFormFieldModule de Angular Material pour les champs de formulaire
import { MatInputModule } from '@angular/material/input'; // Importation du module MatInputModule de Angular Material pour les entrées de formulaire
import { MatButtonModule } from '@angular/material/button'; // Importation du module MatButtonModule de Angular Material pour les boutons

import { AppRoutingModule } from './app-routing.module'; // Importation de AppRoutingModule pour le routage de l'application
import { AppComponent } from './app.component'; // Importation du composant AppComponent
import { LoginComponent } from './login/login.component'; // Importation du composant LoginComponent
import { SignUpComponent } from './sign-up/sign-up.component'; // Importation du composant SignUpComponent

@NgModule({ // Décorateur @NgModule pour définir les métadonnées du module
  declarations: [ // Déclaration des composants de ce module
    AppComponent,
    LoginComponent,
    SignUpComponent
  ],
  imports: [ // Importation des autres modules nécessaires pour ce module
    BrowserModule, // Module nécessaire pour toute application web Angular
    AppRoutingModule, // Module de routage pour gérer la navigation de l'application
    FormsModule, // Module pour travailler avec les formulaires
    HttpClientModule, // Module pour les requêtes HTTP
    BrowserAnimationsModule, // Module pour les animations
    MatCardModule, // Module pour les cartes de Angular Material
    MatFormFieldModule, // Module pour les champs de formulaire de Angular Material
    MatInputModule, // Module pour les entrées de formulaire de Angular Material
    MatButtonModule // Module pour les boutons de Angular Material
  ],
  providers: [], // Fournisseurs de services pour ce module (vide dans ce cas)
  bootstrap: [AppComponent] // Composant principal à démarrer (bootstrap) pour ce module
})
export class AppModule { } // Exportation de la classe AppModule pour qu'elle puisse être utilisée dans d'autres parties de l'application
