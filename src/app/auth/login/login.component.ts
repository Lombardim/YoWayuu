import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {AuthService} from "../../shared/services/auth/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  host: {
    'class': 'component-flex-center'
  }
})
export class LoginComponent {
  public hidePassword: boolean = false;
  public loginForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ])
  });

  constructor(
    private router: Router,
    private authService: AuthService,
    private toastService: ToastrService
  ) {
  }

  async login(): Promise<void> {
    if(this.loginForm.valid) {
      if (this.loginForm.get('username')?.value === 'admin@admin.com' && this.loginForm.get('password')?.value === 'admin12345') {
        try {
          let userData = await this.authService.logIn({
            email: this.loginForm.get('username')?.value,
            password: this.loginForm.get('password')?.value
          }, true);
          localStorage.setItem('loggedId', '0');
          await this.router.navigate(['/home/administration']);
        }catch (e) {
          console.error(e);
          this.toastService.error('Credenciales incorrectas');
        }
      } else {
        try {
          let userData = await this.authService.logIn({
            email: this.loginForm.get('username')?.value,
            password: this.loginForm.get('password')?.value
          });
          localStorage.setItem('loggedId', userData.id.toString());
          await this.router.navigate(['/home/courses-list']);
        }catch (e) {
          console.error(e);
          this.toastService.error('Credenciales incorrectas');
        }
      }
    } else {
      this.toastService.error('Hay errores en los campos');
    }
  }

  async register(): Promise<void> {
    await this.router.navigate(['auth/register']);
  }
}
