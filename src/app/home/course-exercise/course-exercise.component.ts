import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {CourseService} from "../../shared/services/course/course.service";
import {Course, Exercise} from "../../shared/types/course.interface";

@Component({
  selector: 'app-course-exercise',
  templateUrl: './course-exercise.component.html',
  styleUrls: ['./course-exercise.component.scss']
})
export class CourseExerciseComponent implements OnInit {
  exerciseData?: Exercise;
  public uploadedFile?: File;

  constructor(
    private router: Router,
    public courseService: CourseService
  ) { }

  async ngOnInit(): Promise<void> {
    const courseData: Course = await this.courseService.getCourseData(this.courseService.currentLesson.toString());
    this.exerciseData = courseData.exercise;
  }

  async returnToMenu(): Promise<void> {
    await this.router.navigate(['/home/lesson/' + this.courseService.currentLesson]);
  }

  async submitExercise(): Promise<void> {
    if (!this.uploadedFile) {
      return;
    }
    if (this.courseService.levelProgress[this.courseService.currentLesson.toString()] === 50) {
      this.courseService.lessonCompletionStatus[this.courseService.currentLesson.toString()][2].completed = true;
      this.courseService.lessonCompletionStatus[this.courseService.currentLesson.toString()][3].locked = false;
      this.courseService.levelProgress[this.courseService.currentLesson.toString()]+= 25;
      await this.courseService.updateCourseProgress();
    }
    await this.router.navigate(['/home/lesson/' + this.courseService.currentLesson]);
  }

  getCurrentCompletion() {
    return this.courseService.levelProgress[this.courseService.currentLesson.toString()];
  }

  onFileSelected(event: any) {
    this.uploadedFile = event.target.files[0];
  }
}
