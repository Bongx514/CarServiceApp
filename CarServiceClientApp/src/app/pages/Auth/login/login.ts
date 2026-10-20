import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [FormsModule],
  selector: 'app-login',
  styleUrl: './login.less',
  templateUrl: './login.html',
})
export class Login {
  currentYear = new Date().getFullYear();

  email = '';
  password = '';
  rememberMe = false;

  showPassword = false;
  errorMessage = '';

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

   onSubmit(): void {
    this.errorMessage = '';

    if (!this.email.trim() || !this.password) {
      this.errorMessage = 'Please enter your email address and password.';
      return;
    }

    this.errorMessage = 'Authentication service has not been connected yet.';
  }
}
