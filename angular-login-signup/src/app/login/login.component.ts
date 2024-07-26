
import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService) { }

  onLogin() {
    const observer = {
      next: (response: any) => {
        console.log('Login successful', response);
      },
      error: (error: any) => {
        console.error('Login error', error);
      },
      complete: () => {
        console.log('Login request complete');
      }
    };

    this.authService.login({ email: this.email, password: this.password })
      .subscribe(observer);
  }
}