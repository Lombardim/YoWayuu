import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {CourseService} from "../../shared/services/course/course.service";

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
  host: {
    'class': 'component-flex-center'
  }
})
export class CoursesListComponent implements OnInit {
  constructor(
    private router: Router,
    public courseService: CourseService
  ) {
  }

  async ngOnInit(): Promise<void> {
    await this.courseService.getCourseData(this.courseService.currentLesson.toString());
  }

  async redirectToLesson(lesson: 'basic' | 'intermediate' | 'advanced'): Promise<void> {
    this.courseService.currentCourse = lesson;
    await this.router.navigate(['/home/course-level']);
  }

  async checkCourseCompletion(courseToCheck: string, lesson: 'basic' | 'intermediate' | 'advanced') {
    if (this.courseService.levelProgress[courseToCheck] === 100) {
      await this.redirectToLesson(lesson);
    }
  }
}
