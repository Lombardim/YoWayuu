import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

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
      Validators.minLength(8),
    ]),
  });

  constructor(
    private router: Router,
    private toastService: ToastrService
  ) {
  }

  async login() {
    if(this.loginForm.valid) {
      if (this.loginForm.get('username')?.value === 'admin@admin.com' && this.loginForm.get('password')?.value === 'admin123') {
        localStorage.setItem('loggedId', '0');
        await this.router.navigate(['/home/administration']);
      } else {
        localStorage.setItem('loggedId', '1');
        await this.router.navigate(['/home/courses-list']);
      }
    } else {
      this.toastService.error('Hay errores en los campos');
    }
  }

  async register(): Promise<void> {
    await this.router.navigate(['auth/register']);
  }
}
