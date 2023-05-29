import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {emailPattern, passwordPattern} from "../../shared/utils/validator-patterns";
import {ToastrService} from "ngx-toastr";
import {AuthService} from "../../shared/services/auth/auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  host: {
    'class': 'component-flex-center'
  }
})
export class RegisterComponent {
  hidePassword: boolean = false;
  public registerForm: FormGroup = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern(emailPattern)]
    ),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ]),
  });

  constructor(
    private router: Router,
    private toastService: ToastrService,
    private authService: AuthService
  ) {
  }

  async register(): Promise<void> {
    if(this.registerForm.valid) {
      await this.authService.register({
        email: this.registerForm.get('email')?.value ?? '',
        name: this.registerForm.get('firstName')?.value ?? '',
        lastName: this.registerForm.get('lastName')?.value ?? '',
        password: this.registerForm.get('password')?.value ?? ''
      });
      await this.return();
    } else {
      this.toastService.error('Hay errores en los campos');
    }
  }


  async return(): Promise<void> {
    await this.router.navigate(['/auth/login']);
  }
}
