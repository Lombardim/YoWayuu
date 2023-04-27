import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-course-level',
  templateUrl: './course-level.component.html',
  styleUrls: ['./course-level.component.scss'],
  host: {
    'class': 'component-flex-center'
  }
})
export class CourseLevelComponent {

  constructor(
    private router: Router
  ) {
  }

  async redirectToLesson(lesson: number): Promise<void> {
    await this.router.navigate(['/home/lesson/' + lesson]);
  }

  async returnToList(): Promise<void> {
    await this.router.navigate(['/home/courses-list']);
  }
}
