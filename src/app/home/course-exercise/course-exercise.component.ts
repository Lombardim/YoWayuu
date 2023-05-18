import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {CourseService} from "../../shared/services/course/course.service";

@Component({
  selector: 'app-course-exercise',
  templateUrl: './course-exercise.component.html',
  styleUrls: ['./course-exercise.component.scss']
})
export class CourseExerciseComponent {
  public uploadedFile?: File;

  constructor(
    private router: Router,
    public courseService: CourseService
  ) { }

  async returnToMenu(): Promise<void> {
    await this.router.navigate(['/home/lesson/' + this.courseService.currentLesson]);
  }

  async submitExercise(): Promise<void> {
    if (!this.uploadedFile) {
      return;
    }
    if (this.courseService.currentLesson === 1) {
      if (this.courseService.basicLevel1Progress === 50) {
        this.courseService.basicLevel1Progress += 25;
        this.courseService.lesson1CompletionStatus[2].completed = true;
        this.courseService.lesson1CompletionStatus[3].locked = false;
        this.courseService.uploadedFile = this.uploadedFile;
      }
    } else {
      if (this.courseService.basicLevel2Progress === 50) {
        this.courseService.basicLevel2Progress += 25;
        this.courseService.lesson2CompletionStatus[2].completed = true;
        this.courseService.lesson2CompletionStatus[3].locked = false;
        this.courseService.uploadedFile = this.uploadedFile;
      }
    }
    await this.router.navigate(['/home/lesson/' + this.courseService.currentLesson]);
  }

  getCurrentCompletion() {
    return this.courseService.currentLesson === 1 ? this.courseService.basicLevel1Progress : this.courseService.basicLevel2Progress;
  }

  onFileSelected(event: any) {
    this.uploadedFile = event.target.files[0];
  }
}
