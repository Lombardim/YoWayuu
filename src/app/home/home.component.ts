import {Component, OnInit} from '@angular/core';
import {AuthService} from "../shared/services/auth/auth.service";
import {CourseService} from "../shared/services/course/course.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private courseService: CourseService
  ) { }

  async ngOnInit(): Promise<void> {
    let userId = localStorage.getItem('loggedId');
    if (userId && !this.authService.loggedUser) {
      if(userId !== '0') {
        await this.authService.autoLogin(parseInt(userId, 10));
      }
      await this.dataWasRetrieved();
      await this.userWasRetrieved();
      this.courseService.updateCourseCompletion(this.authService.loggedUser!);
    }
  }

  /**
   * Checks if data was already retrieved
   * */
  async dataWasRetrieved() {
    while (!this.courseService.coursesData) {
      await new Promise((resolve) => setTimeout(resolve, 50));
    }
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
