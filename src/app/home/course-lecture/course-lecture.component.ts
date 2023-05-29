import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {CourseService} from "../../shared/services/course/course.service";
import {Course, Lecture} from "../../shared/types/course.interface";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-course-lecture',
  templateUrl: './course-lecture.component.html',
  styleUrls: ['./course-lecture.component.scss']
})
export class CourseLectureComponent implements OnInit {
  lectureData?: Lecture;

  constructor(
    private router: Router,
    public courseService: CourseService,
    private sanitizer: DomSanitizer) {}


  trustURL() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      this.lectureData?.lectureVideoURL ?? 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
    );
  }

  async ngOnInit(): Promise<void> {
    const courseData: Course = await this.courseService.getCourseData(this.courseService.currentLesson.toString());
    this.lectureData = courseData.lecture;
  }

  async returnToMenu(): Promise<void> {
    await this.router.navigate(['/home/lesson/' + this.courseService.currentLesson]);
  }
  async submitLecture(): Promise<void> {
    if (this.courseService.levelProgress[this.courseService.currentLesson.toString()] === 0) {
      this.courseService.lessonCompletionStatus[this.courseService.currentLesson.toString()][0].completed = true;
      this.courseService.lessonCompletionStatus[this.courseService.currentLesson.toString()][1].locked = false;
      this.courseService.levelProgress[this.courseService.currentLesson.toString()]+= 25;
      await this.courseService.updateCourseProgress();
    }
    await this.router.navigate(['/home/lesson/' + this.courseService.currentLesson]);
  }

  getCurrentCompletion() {
    return this.courseService.levelProgress[this.courseService.currentLesson.toString()];
  }
}
