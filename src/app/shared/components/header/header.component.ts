import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth/auth.service";
import {User} from "../../types/user.interface";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public loggedUser?: User;
  isAdmin: boolean = false;

  constructor(
    private router: Router,
    private authService: AuthService
  ) {
  }

  async ngOnInit(): Promise<void> {
    await this.userWasRetrieved();
    this.loggedUser = this.authService.loggedUser;
    this.isAdmin = this.loggedUser?.email === 'admin@admin.com';
    console.log(this.isAdmin);
  }

  async logOut(): Promise<void> {
    localStorage.removeItem('loggedId');
    await this.router.navigate(['/auth/login']);
  }

  async redirectToGrades(): Promise<void> {
    await this.router.navigate(['/home/grades']);
  }

  /**
   * Checks if user was already retrieved
   * */
  async userWasRetrieved() {
    while (!this.authService.loggedUser) {
      await new Promise((resolve) => setTimeout(resolve, 50));
    }
  }
}
