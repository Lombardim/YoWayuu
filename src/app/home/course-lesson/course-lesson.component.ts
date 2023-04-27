import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-course-lesson',
  templateUrl: './course-lesson.component.html',
  styleUrls: ['./course-lesson.component.scss']
})
export class CourseLessonComponent {

  constructor(
    private router: Router
  ) {
  }
  async returnToLevel(): Promise<void> {
    await this.router.navigate(['/home/course-level']);
  }
  async redirectToLecture(): Promise<void> {
    await this.router.navigate(['/home/lecture']);
  }
  async redirectToExample(): Promise<void> {
    await this.router.navigate(['/home/example']);
  }
  async redirectToExercise(): Promise<void> {
    await this.router.navigate(['/home/exercise']);
  }
  async redirectToTest(): Promise<void> {
    await this.router.navigate(['/home/test']);
  }
}
