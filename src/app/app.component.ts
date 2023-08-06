import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PasswordCheckerService } from './components/password-checker/password-checker.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  passwordValue: string = '';

  passwordForm = new FormGroup({
    password: new FormControl(null, [
      Validators.minLength(8),
      Validators.required,
      (v: any) =>
        PasswordCheckerService.checkStrength(v) !== 30
          ? { invalidPassword: true }
          : null,
    ]),
  });

  getErrors() {
    return Object.keys(this.passwordForm.get('password')?.errors || {});
  }

  getStrength() {
    return PasswordCheckerService.checkStrength(
      this.passwordForm.get('password')?.value || ''
    );
  }
}
