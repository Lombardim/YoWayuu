import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home.component";
import {CoursesListComponent} from "./courses-list/courses-list.component";
import {CourseLevelComponent} from "./course-level/course-level.component";
import {CourseLessonComponent} from "./course-lesson/course-lesson.component";
import {CourseLectureComponent} from "./course-lecture/course-lecture.component";
import {CourseExampleComponent} from "./course-example/course-example.component";
import {CourseExerciseComponent} from "./course-exercise/course-exercise.component";
import {CourseTestComponent} from "./course-test/course-test.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'courses-list',
        component: CoursesListComponent
      },
      {
        path: 'course-level',
        component: CourseLevelComponent
      },
      {
        path: 'lesson/:lessonId',
        component: CourseLessonComponent
      },
      {
        path: 'lecture',
        component: CourseLectureComponent
      },
      {
        path: 'example',
        component: CourseExampleComponent
      },
      {
        path: 'exercise',
        component: CourseExerciseComponent
      },
      {
        path: 'test',
        component: CourseTestComponent
      },
      {
        path: '**', redirectTo: 'courses-list', pathMatch: 'full'
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
