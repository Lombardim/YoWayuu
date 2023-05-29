import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {CourseService} from "../../shared/services/course/course.service";
import {Course, Example} from "../../shared/types/course.interface";

@Component({
  selector: 'app-course-example',
  templateUrl: './course-example.component.html',
  styleUrls: ['./course-example.component.scss']
})
export class CourseExampleComponent implements OnInit {
  exampleData?: Example;

  constructor(
    private router: Router,
    public courseService: CourseService
  ) {
  }

  async ngOnInit(): Promise<void> {
    const courseData: Course = await this.courseService.getCourseData(this.courseService.currentLesson.toString());
    this.exampleData = courseData.example;
  }

  async returnToMenu(): Promise<void> {
    await this.router.navigate(['/home/lesson/' + this.courseService.currentLesson]);
  }
  async submitExample(): Promise<void> {
    if (this.courseService.levelProgress[this.courseService.currentLesson.toString()] === 25) {
      this.courseService.lessonCompletionStatus[this.courseService.currentLesson.toString()][1].completed = true;
      this.courseService.lessonCompletionStatus[this.courseService.currentLesson.toString()][2].locked = false;
      this.courseService.levelProgress[this.courseService.currentLesson.toString()]+= 25;
      await this.courseService.updateCourseProgress();
    }
    await this.router.navigate(['/home/lesson/' + this.courseService.currentLesson]);
  }

  getCurrentCompletion() {
    return this.courseService.levelProgress[this.courseService.currentLesson.toString()];
  }
}
