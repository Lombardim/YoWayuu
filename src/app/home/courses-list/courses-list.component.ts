import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
  host: {
    'class': 'component-flex-center'
  }
})
export class CoursesListComponent {
  constructor(
    private router: Router
  ) {
  }
  async redirectToLesson(lesson: 'basic' | 'intermediate' | 'advanced'): Promise<void> {
    await this.router.navigate(['/home/course-level']);
  }
}
