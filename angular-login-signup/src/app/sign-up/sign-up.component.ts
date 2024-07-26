/*import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService) { }

  onSignUp() {
    this.authService.signUp({ email: this.email, password: this.password })
      .subscribe(response => {
        console.log('Sign up successful', response);
      }, error => {
        console.error('Sign up error', error);
      });
  }
}*/
import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService) { }

  onSignUp() {
    const observer = {
      next: (response: any) => {
        console.log('Sign up successful', response);
      },
      error: (error: any) => {
        console.error('Sign up error', error);
      },
      complete: () => {
        console.log('Sign up request complete');
      }
    };

    this.authService.signUp({ email: this.email, password: this.password })
      .subscribe(observer);
  }
}
