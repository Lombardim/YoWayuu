import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {CourseService} from "../../shared/services/course/course.service";

@Component({
  selector: 'app-course-lecture',
  templateUrl: './course-lecture.component.html',
  styleUrls: ['./course-lecture.component.scss']
})
export class CourseLectureComponent {

  constructor(
    private router: Router,
    public courseService: CourseService
  ) {
  }

  async returnToMenu(): Promise<void> {
    await this.router.navigate(['/home/lesson/' + this.courseService.currentLesson]);
  }
  async submitLecture(): Promise<void> {
    if (this.courseService.currentLesson === 1) {
      if (this.courseService.basicLevel1Progress === 0) {
        this.courseService.basicLevel1Progress += 25;
        this.courseService.lesson1CompletionStatus[0].completed = true;
        this.courseService.lesson1CompletionStatus[1].locked = false;
      }
    } else {
      if (this.courseService.basicLevel2Progress === 0) {
        this.courseService.basicLevel2Progress += 25;
        this.courseService.lesson2CompletionStatus[0].completed = true;
        this.courseService.lesson2CompletionStatus[1].locked = false;
      }
    }
    await this.router.navigate(['/home/lesson/' + this.courseService.currentLesson]);
  }

  getCurrentCompletion() {
    return this.courseService.currentLesson === 1 ? this.courseService.basicLevel1Progress : this.courseService.basicLevel2Progress;
  }
}
