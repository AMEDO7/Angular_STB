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
  fullName: string = '';
  birthDate: string = '';
  email: string = '';
  phoneNumber: string = '';
  address: string = '';
  address2: string = '';
  city: string = '';
  postalCode: string = '';
  country: string = '';
  username: string = '';
  password: string = '';
  confirmPassword: string = '';
  securityQuestion: string = '';
  securityAnswer: string = '';
  acceptTerms: boolean = false;

  constructor(private authService: AuthService) { }

  onSignUp() {
    const user = {
      fullName: this.fullName,
      birthDate: this.birthDate,
      email: this.email,
      phoneNumber: this.phoneNumber,
      address: this.address,
      address2: this.address2,
      city: this.city,
      postalCode: this.postalCode,
      country: this.country,
      username: this.username,
      password: this.password,
      confirmPassword: this.confirmPassword,
      securityQuestion: this.securityQuestion,
      securityAnswer: this.securityAnswer,
      acceptTerms: this.acceptTerms
    };

    this.authService.signUp(user).subscribe(
      response => {
        console.log('Sign up successful', response);
      },
      error => {
        console.error('Sign up error', error);
      }
    );
  }
}

