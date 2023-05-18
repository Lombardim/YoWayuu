import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {CourseService} from "../../shared/services/course/course.service";

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
    private router: Router,
    public courseService: CourseService
  ) {
  }

  async redirectToLesson(lesson: number): Promise<void> {
    this.courseService.currentLesson = lesson;
    await this.router.navigate(['/home/lesson/' + lesson]);
  }

  async returnToList(): Promise<void> {
    await this.router.navigate(['/home/courses-list']);
  }

  async checkCourseCompletion() {
    if (this.courseService.basicLevel1Progress === 100) {
      await this.redirectToLesson(2);
    }
  }
}
