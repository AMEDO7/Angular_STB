import { Component } from '@angular/core'; // Importation de la classe Component d'Angular

@Component({ // Décorateur @Component pour définir les métadonnées du composant
  selector: 'app-root', // Sélecteur CSS pour identifier ce composant dans un template HTML
  templateUrl: './app.component.html', // Chemin vers le fichier de template HTML de ce composant
  styleUrls: ['./app.component.css'] // Chemin vers le fichier de style CSS de ce composant
})
export class AppComponent { // Déclaration de la classe AppComponent
  title = 'angular-login-signup'; // Déclaration d'une propriété 'title' avec une valeur initiale
}
