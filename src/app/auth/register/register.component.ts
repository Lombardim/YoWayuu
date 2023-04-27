import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {emailPattern, passwordPattern} from "../../shared/utils/validator-patterns";
import {ToastrService} from "ngx-toastr";

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
      Validators.minLength(8),
      Validators.pattern(passwordPattern)
    ]),
  });

  constructor(
    private router: Router,
    private toastService: ToastrService
  ) {
  }

  async register(): Promise<void> {
    if(this.registerForm.valid) {

      await this.return();
    } else {
      this.toastService.error('Hay errores en los campos');
    }
  }


  async return(): Promise<void> {
    await this.router.navigate(['/auth/login']);
  }
}
