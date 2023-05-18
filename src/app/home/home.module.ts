import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import {HomeComponent} from "./home.component";
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CourseLevelComponent } from './course-level/course-level.component';
import { CourseLessonComponent } from './course-lesson/course-lesson.component';
import { CourseLectureComponent } from './course-lecture/course-lecture.component';
import { CourseExampleComponent } from './course-example/course-example.component';
import { CourseExerciseComponent } from './course-exercise/course-exercise.component';
import { CourseTestComponent } from './course-test/course-test.component';
import {SharedModule} from "../shared/shared.module";
import {MaterialModule} from "../material/material.module";
import {ReactiveFormsModule} from "@angular/forms";
import { AdminScreenComponent } from './admin-screen/admin-screen.component';

@NgModule({
  declarations: [
    HomeComponent,
    CoursesListComponent,
    CourseLevelComponent,
    CourseLessonComponent,
    CourseLectureComponent,
    CourseExampleComponent,
    CourseExerciseComponent,
    CourseTestComponent,
    AdminScreenComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HomeRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
