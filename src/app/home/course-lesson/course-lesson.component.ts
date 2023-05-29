import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CourseService} from "../../shared/services/course/course.service";

@Component({
  selector: 'app-course-lesson',
  templateUrl: './course-lesson.component.html',
  styleUrls: ['./course-lesson.component.scss']
})
export class CourseLessonComponent implements OnInit {
  public currentLesson: number = 0;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public courseService: CourseService
  ) {
  }

  ngOnInit() {
    this.currentLesson = parseInt(this.route.snapshot.paramMap.get('lessonId') ?? '0');
  }

  async returnToLevel(): Promise<void> {
    await this.router.navigate(['/home/course-level']);
  }
  async redirectToLecture(): Promise<void> {
    await this.router.navigate(['/home/lecture']);
  }
  async redirectToExample(): Promise<void> {
    if (this.isExampleLocked()) return;
    await this.router.navigate(['/home/example']);
  }
  async redirectToExercise(): Promise<void> {
    if (this.isExerciseLocked()) return;
    await this.router.navigate(['/home/exercise']);
  }
  async redirectToTest(): Promise<void> {
    if (this.isTestLocked()) return;
    await this.router.navigate(['/home/test']);
  }

  getCurrentLessonCompletion(): number {
    return this.courseService.levelProgress[this.courseService.currentLesson.toString()];
  }

  isLectureLocked(): boolean {
    const completionStatus = this.courseService.lessonCompletionStatus[this.courseService.currentLesson.toString()][0];
    return completionStatus.locked;
  }

  isLectureCompleted(): boolean {
    const completionStatus = this.courseService.lessonCompletionStatus[this.courseService.currentLesson.toString()][0];
    return completionStatus.completed;
  }

  isExampleLocked(): boolean {
    const completionStatus = this.courseService.lessonCompletionStatus[this.courseService.currentLesson.toString()][1];
    return completionStatus.locked;
  }

  isExampleCompleted(): boolean {
    const completionStatus = this.courseService.lessonCompletionStatus[this.courseService.currentLesson.toString()][1];
    return completionStatus.completed;
  }

  isExerciseLocked(): boolean {
    const completionStatus = this.courseService.lessonCompletionStatus[this.courseService.currentLesson.toString()][2];
    return completionStatus.locked;
  }

  isExerciseCompleted(): boolean {
    const completionStatus = this.courseService.lessonCompletionStatus[this.courseService.currentLesson.toString()][2];
    return completionStatus.completed;
  }

  isTestLocked(): boolean {
    const completionStatus = this.courseService.lessonCompletionStatus[this.courseService.currentLesson.toString()][3];
    return completionStatus.locked;
  }

  isTestCompleted(): boolean {
    const completionStatus = this.courseService.lessonCompletionStatus[this.courseService.currentLesson.toString()][3];
    return completionStatus.completed;
  }
}
