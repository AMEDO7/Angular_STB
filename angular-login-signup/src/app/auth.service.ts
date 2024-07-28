import { Injectable } from '@angular/core'; // Importation de la décoration Injectable d'Angular
import { HttpClient } from '@angular/common/http'; // Importation de HttpClient pour faire des requêtes HTTP
import { Observable } from 'rxjs'; // Importation de Observable de la bibliothèque RxJS pour gérer les flux de données asynchrones

@Injectable({
  providedIn: 'root' // Fournisseur de service au niveau de la racine, rendant ce service disponible dans toute l'application
})
export class AuthService { // Déclaration de la classe AuthService
  private apiUrl = 'assets'; // Répertoire des fichiers JSON locaux

  constructor(private http: HttpClient) { } // Injection de HttpClient dans le constructeur pour l'utiliser dans les méthodes de la classe

  // Méthode pour effectuer une requête POST pour le login
  login(credentials: any): Observable<any> { 
    return this.http.post(`${this.apiUrl}/login-response.json`, credentials); // Requête POST vers un fichier JSON local avec les informations de connexion
  }

  // Méthode pour effectuer une requête POST pour l'inscription
  signUp(user: any): Observable<any> { 
    return this.http.post(`${this.apiUrl}/signup-response.json`, user); // Requête POST vers un fichier JSON local avec les informations d'inscription
  }
}
