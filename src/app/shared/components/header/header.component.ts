import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(
    private router: Router
  ) {
  }

  async logOut(): Promise<void> {
    localStorage.removeItem('loggedId');
    await this.router.navigate(['/auth/login']);
  }

  async redirectToGrades(): Promise<void> {
    await this.router.navigate(['/home/grades']);
  }
}
