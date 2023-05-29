import {Component, OnInit} from '@angular/core';
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
export class CourseLevelComponent implements OnInit {

  constructor(
    private router: Router,
    public courseService: CourseService
  ) {
  }

  async ngOnInit(): Promise<void> {
    await this.courseService.getCourseData(this.courseService.currentLesson.toString());
  }

  async redirectToLesson(lesson: number): Promise<void> {
    this.courseService.currentLesson = lesson;
    await this.courseService.getCourseData(this.courseService.currentLesson.toString());
    await this.router.navigate(['/home/lesson/' + lesson]);
  }

  async returnToList(): Promise<void> {
    await this.router.navigate(['/home/courses-list']);
  }

  async checkCourseCompletion(courseToCheck: string) {
    if (this.courseService.levelProgress[courseToCheck] === 100) {
      await this.redirectToLesson(parseInt(courseToCheck, 10) + 1);
    }
  }

  getLevelProgress(level: string) {
    return this.courseService.levelProgress[level] === 0;
  }
}
