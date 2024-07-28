import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'; // Importation de platformBrowserDynamic pour compiler et démarrer l'application dans un navigateur

import { AppModule } from './app/app.module'; // Importation du module principal de l'application, AppModule

// Démarrage de l'application en utilisant platformBrowserDynamic et bootstrapModule pour démarrer AppModule
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err)); // Gestion des erreurs lors du démarrage de l'application, avec affichage des erreurs dans la console
