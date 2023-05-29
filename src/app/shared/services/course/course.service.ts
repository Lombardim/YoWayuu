import { Injectable } from '@angular/core';
import {AvailableCourses, Course} from "../../types/course.interface";
import {HttpClient} from "@angular/common/http";
import {lastValueFrom} from "rxjs";
import {CourseCompletion, CoursePercentageProgress} from "../../types/completion-interface";
import {UpdateUser, User} from "../../types/user.interface";
import {ServerResponse} from "../../types/server_response.interface";
import {AuthService} from "../auth/auth.service";

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private url: string = 'http://localhost:3000';
  public coursesData?: AvailableCourses;
  public currentCourse: 'basic' | 'intermediate' | 'advanced' = 'basic';
  public currentLesson: number = 2;

  public lessonCompletionStatus: CourseCompletion = {
    1: [
      {
        section: 'lecture',
        completed: false,
        locked: false
      },
      {
        section: 'example',
        completed: false,
        locked: true
      },
      {
        section: 'exercise',
        completed: false,
        locked: true
      },
      {
        section: 'test',
        completed: false,
        locked: true
      }
    ],
    2: [
      {
        section: 'lecture',
        completed: false,
        locked: false
      },
      {
        section: 'example',
        completed: false,
        locked: true
      },
      {
        section: 'exercise',
        completed: false,
        locked: true
      },
      {
        section: 'test',
        completed: false,
        locked: true
      },
    ],
    3: [
      {
        section: 'lecture',
        completed: false,
        locked: false
      },
      {
        section: 'example',
        completed: false,
        locked: true
      },
      {
        section: 'exercise',
        completed: false,
        locked: true
      },
      {
        section: 'test',
        completed: false,
        locked: true
      },
    ],
    4: [
      {
        section: 'lecture',
        completed: false,
        locked: false
      },
      {
        section: 'example',
        completed: false,
        locked: true
      },
      {
        section: 'exercise',
        completed: false,
        locked: true
      },
      {
        section: 'test',
        completed: false,
        locked: true
      },
    ],
    5: [
      {
        section: 'lecture',
        completed: false,
        locked: false
      },
      {
        section: 'example',
        completed: false,
        locked: true
      },
      {
        section: 'exercise',
        completed: false,
        locked: true
      },
      {
        section: 'test',
        completed: false,
        locked: true
      },
    ],
    6: [
      {
        section: 'lecture',
        completed: false,
        locked: false
      },
      {
        section: 'example',
        completed: false,
        locked: true
      },
      {
        section: 'exercise',
        completed: false,
        locked: true
      },
      {
        section: 'test',
        completed: false,
        locked: true
      },
    ]
  };
  public levelProgress: CoursePercentageProgress = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0
  }

  constructor(
    private http: HttpClient,
    private authService: AuthService,
  ) { }

  async getCourseData(courseId: string): Promise<Course> {
    if (!this.coursesData) {
      this.coursesData = await lastValueFrom(
        this.http.get<AvailableCourses>('assets/courses/courses_data.json')
      );
    }
    return this.coursesData[courseId];
  }

  updateCourseCompletion(userData: User) {
    if (userData.notaCurso1 > 0) {
      this.levelProgress["1"] = 100;
      if(this.coursesData) this.coursesData["1"].grading = userData.notaCurso1;
    }
    switch (userData.progresoCurso1) {
      case 25:
        this.lessonCompletionStatus["1"][0].completed = true;
        this.lessonCompletionStatus["1"][1].locked = false;
        break;
      case 50:
        this.lessonCompletionStatus["1"][0].completed = true;
        this.lessonCompletionStatus["1"][1].locked = false;
        this.lessonCompletionStatus["1"][1].completed = true;
        this.lessonCompletionStatus["1"][2].locked = false;
        break;
      case 75:
        this.lessonCompletionStatus["1"][0].completed = true;
        this.lessonCompletionStatus["1"][1].locked = false;
        this.lessonCompletionStatus["1"][1].completed = true;
        this.lessonCompletionStatus["1"][2].locked = false;
        this.lessonCompletionStatus["1"][2].completed = true;
        this.lessonCompletionStatus["1"][3].locked = false;
        break;
      case 100:
        this.lessonCompletionStatus["1"][0].completed = true;
        this.lessonCompletionStatus["1"][1].locked = false;
        this.lessonCompletionStatus["1"][1].completed = true;
        this.lessonCompletionStatus["1"][2].locked = false;
        this.lessonCompletionStatus["1"][2].completed = true;
        this.lessonCompletionStatus["1"][3].locked = false;
        this.lessonCompletionStatus["1"][3].completed = true;
        break;
    }
    this.levelProgress["1"] = userData.progresoCurso1;

    if (userData.notaCurso2 > 0) {
      this.levelProgress["2"] = 100;
      if(this.coursesData) this.coursesData["2"].grading = userData.notaCurso2;
    }
    switch (userData.progresoCurso2) {
      case 25:
        this.lessonCompletionStatus["2"][0].completed = true;
        this.lessonCompletionStatus["2"][1].locked = false;
        break;
      case 50:
        this.lessonCompletionStatus["2"][0].completed = true;
        this.lessonCompletionStatus["2"][1].locked = false;
        this.lessonCompletionStatus["2"][1].completed = true;
        this.lessonCompletionStatus["2"][2].locked = false;
        break;
      case 75:
        this.lessonCompletionStatus["2"][0].completed = true;
        this.lessonCompletionStatus["2"][1].locked = false;
        this.lessonCompletionStatus["2"][1].completed = true;
        this.lessonCompletionStatus["2"][2].locked = false;
        this.lessonCompletionStatus["2"][2].completed = true;
        this.lessonCompletionStatus["2"][3].locked = false;
        break;
      case 100:
        this.lessonCompletionStatus["2"][0].completed = true;
        this.lessonCompletionStatus["2"][1].locked = false;
        this.lessonCompletionStatus["2"][1].completed = true;
        this.lessonCompletionStatus["2"][2].locked = false;
        this.lessonCompletionStatus["2"][2].completed = true;
        this.lessonCompletionStatus["2"][3].locked = false;
        this.lessonCompletionStatus["2"][3].completed = true;
        break;
    }
    this.levelProgress["2"] = userData.progresoCurso2;

    if (userData.notaCurso3 > 0) {
      this.levelProgress["3"] = 100;
      if(this.coursesData) this.coursesData["3"].grading = userData.notaCurso3;
    }
    switch (userData.progresoCurso3) {
      case 25:
        this.lessonCompletionStatus["3"][0].completed = true;
        this.lessonCompletionStatus["3"][1].locked = false;
        break;
      case 50:
        this.lessonCompletionStatus["3"][0].completed = true;
        this.lessonCompletionStatus["3"][1].locked = false;
        this.lessonCompletionStatus["3"][1].completed = true;
        this.lessonCompletionStatus["3"][2].locked = false;
        break;
      case 75:
        this.lessonCompletionStatus["3"][0].completed = true;
        this.lessonCompletionStatus["3"][1].locked = false;
        this.lessonCompletionStatus["3"][1].completed = true;
        this.lessonCompletionStatus["3"][2].locked = false;
        this.lessonCompletionStatus["3"][2].completed = true;
        this.lessonCompletionStatus["3"][3].locked = false;
        break;
      case 100:
        this.lessonCompletionStatus["3"][0].completed = true;
        this.lessonCompletionStatus["3"][1].locked = false;
        this.lessonCompletionStatus["3"][1].completed = true;
        this.lessonCompletionStatus["3"][2].locked = false;
        this.lessonCompletionStatus["3"][2].completed = true;
        this.lessonCompletionStatus["3"][3].locked = false;
        this.lessonCompletionStatus["3"][3].completed = true;
        break;
    }
    this.levelProgress["3"] = userData.progresoCurso3;

    if (userData.notaCurso4 > 0) {
      this.levelProgress["4"] = 100;
      if(this.coursesData) this.coursesData["4"].grading = userData.notaCurso4;
    }
    switch (userData.progresoCurso4) {
      case 25:
        this.lessonCompletionStatus["4"][0].completed = true;
        this.lessonCompletionStatus["4"][1].locked = false;
        break;
      case 50:
        this.lessonCompletionStatus["4"][0].completed = true;
        this.lessonCompletionStatus["4"][1].locked = false;
        this.lessonCompletionStatus["4"][1].completed = true;
        this.lessonCompletionStatus["4"][2].locked = false;
        break;
      case 75:
        this.lessonCompletionStatus["4"][0].completed = true;
        this.lessonCompletionStatus["4"][1].locked = false;
        this.lessonCompletionStatus["4"][1].completed = true;
        this.lessonCompletionStatus["4"][2].locked = false;
        this.lessonCompletionStatus["4"][2].completed = true;
        this.lessonCompletionStatus["4"][3].locked = false;
        break;
      case 100:
        this.lessonCompletionStatus["4"][0].completed = true;
        this.lessonCompletionStatus["4"][1].locked = false;
        this.lessonCompletionStatus["4"][1].completed = true;
        this.lessonCompletionStatus["4"][2].locked = false;
        this.lessonCompletionStatus["4"][2].completed = true;
        this.lessonCompletionStatus["4"][3].locked = false;
        this.lessonCompletionStatus["4"][3].completed = true;
        break;
    }
    this.levelProgress["4"] = userData.progresoCurso4;

    if (userData.notaCurso5 > 0) {
      this.levelProgress["5"] = 100;
      if(this.coursesData) this.coursesData["5"].grading = userData.notaCurso5;
    }
    switch (userData.progresoCurso5) {
      case 25:
        this.lessonCompletionStatus["5"][0].completed = true;
        this.lessonCompletionStatus["5"][1].locked = false;
        break;
      case 50:
        this.lessonCompletionStatus["5"][0].completed = true;
        this.lessonCompletionStatus["5"][1].locked = false;
        this.lessonCompletionStatus["5"][1].completed = true;
        this.lessonCompletionStatus["5"][2].locked = false;
        break;
      case 75:
        this.lessonCompletionStatus["5"][0].completed = true;
        this.lessonCompletionStatus["5"][1].locked = false;
        this.lessonCompletionStatus["5"][1].completed = true;
        this.lessonCompletionStatus["5"][2].locked = false;
        this.lessonCompletionStatus["5"][2].completed = true;
        this.lessonCompletionStatus["5"][3].locked = false;
        break;
      case 100:
        this.lessonCompletionStatus["5"][0].completed = true;
        this.lessonCompletionStatus["5"][1].locked = false;
        this.lessonCompletionStatus["5"][1].completed = true;
        this.lessonCompletionStatus["5"][2].locked = false;
        this.lessonCompletionStatus["5"][2].completed = true;
        this.lessonCompletionStatus["5"][3].locked = false;
        this.lessonCompletionStatus["5"][3].completed = true;
        break;
    }
    this.levelProgress["5"] = userData.progresoCurso5;

    if (userData.notaCurso6 > 0) {
      this.levelProgress["6"] = 100;
      if(this.coursesData) this.coursesData["6"].grading = userData.notaCurso6;
    }
    switch (userData.progresoCurso6) {
      case 25:
        this.lessonCompletionStatus["6"][0].completed = true;
        this.lessonCompletionStatus["6"][1].locked = false;
        break;
      case 50:
        this.lessonCompletionStatus["6"][0].completed = true;
        this.lessonCompletionStatus["6"][1].locked = false;
        this.lessonCompletionStatus["6"][1].completed = true;
        this.lessonCompletionStatus["6"][2].locked = false;
        break;
      case 75:
        this.lessonCompletionStatus["6"][0].completed = true;
        this.lessonCompletionStatus["6"][1].locked = false;
        this.lessonCompletionStatus["6"][1].completed = true;
        this.lessonCompletionStatus["6"][2].locked = false;
        this.lessonCompletionStatus["6"][2].completed = true;
        this.lessonCompletionStatus["6"][3].locked = false;
        break;
      case 100:
        this.lessonCompletionStatus["6"][0].completed = true;
        this.lessonCompletionStatus["6"][1].locked = false;
        this.lessonCompletionStatus["6"][1].completed = true;
        this.lessonCompletionStatus["6"][2].locked = false;
        this.lessonCompletionStatus["6"][2].completed = true;
        this.lessonCompletionStatus["6"][3].locked = false;
        this.lessonCompletionStatus["6"][3].completed = true;
        break;
    }
    this.levelProgress["6"] = userData.progresoCurso6;
  }

  async updateUser(updateValue: UpdateUser): Promise<User> {
    let res = await lastValueFrom(
      this.http.patch<ServerResponse<User>>(`${this.url}/user/${this.authService.loggedUser?.id ?? 0}`, updateValue)
    );
    return res.data;
  }

  async updateCourseProgress(): Promise<void> {
    switch (this.currentLesson) {
      case 1:
        await this.updateUser({
          progresoCurso1: this.levelProgress[this.currentLesson.toString()]
        });
        break;
      case 2:
        await this.updateUser({
          progresoCurso2: this.levelProgress[this.currentLesson.toString()]
        });
        break;
      case 3:
        await this.updateUser({
          progresoCurso3: this.levelProgress[this.currentLesson.toString()]
        });
        break;
      case 4:
        await this.updateUser({
          progresoCurso4: this.levelProgress[this.currentLesson.toString()]
        });
        break;
      case 5:
        await this.updateUser({
          progresoCurso5: this.levelProgress[this.currentLesson.toString()]
        });
        break;
      case 6:
        await this.updateUser({
          progresoCurso6: this.levelProgress[this.currentLesson.toString()]
        });
        break;
    }
  }

  async updateCourseGrading(): Promise<void> {
    switch (this.currentLesson) {
      case 1:
        await this.updateUser({
          notaCurso1: this.coursesData![this.currentLesson.toString()].grading,
          progresoCurso1: 100
        });
        break;
      case 2:
        await this.updateUser({
          notaCurso2: this.coursesData![this.currentLesson.toString()].grading,
          progresoCurso2: 100
        });
        break;
      case 3:
        await this.updateUser({
          notaCurso3: this.coursesData![this.currentLesson.toString()].grading,
          progresoCurso3: 100
        });
        break;
      case 4:
        await this.updateUser({
          notaCurso4: this.coursesData![this.currentLesson.toString()].grading,
          progresoCurso4: 100
        });
        break;
      case 5:
        await this.updateUser({
          notaCurso5: this.coursesData![this.currentLesson.toString()].grading,
          progresoCurso5: 100
        });
        break;
      case 6:
        await this.updateUser({
          notaCurso6: this.coursesData![this.currentLesson.toString()].grading,
          progresoCurso6: 100
        });
        break;
    }
  }
}
