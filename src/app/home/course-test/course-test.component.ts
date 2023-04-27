import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {Test} from "../../shared/types/test.interface";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-course-test',
  templateUrl: './course-test.component.html',
  styleUrls: ['./course-test.component.scss']
})
export class CourseTestComponent {
  canBeSubmitted: boolean = false;
  testBody: Test[] = [
    {
      question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam, dolor sed molestie maximus, ' +
        'diam sapien hendrerit arcu, non molestie leo velit nec enim. Ut a condimentum ex. Nullam vel felis in velit ' +
        'placerat gravida nec sed dolor. Maecenas in ligula ut felis ullamcorper pharetra. Nulla facilisis justo ornare ' +
        'interdum tempus. ',
      optionSelected: false,
      options: ['LIPSUM 1', 'LIPSUM 2', 'LIPSUM 3', 'LIPSUM 4'],
      form: new FormGroup({
        question1: new FormControl('')
      })
    },
    {
      question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam, dolor sed molestie maximus, ' +
        'diam sapien hendrerit arcu, non molestie leo velit nec enim. Ut a condimentum ex. Nullam vel felis in velit ' +
        'placerat gravida nec sed dolor. Maecenas in ligula ut felis ullamcorper pharetra. Nulla facilisis justo ornare ' +
        'interdum tempus. ',
      optionSelected: false,
      options: ['LIPSUM 1', 'LIPSUM 2', 'LIPSUM 3', 'LIPSUM 4'],
      form: new FormGroup({
        question2: new FormControl('')
      })
    },
    {
      question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam, dolor sed molestie maximus, ' +
        'diam sapien hendrerit arcu, non molestie leo velit nec enim. Ut a condimentum ex. Nullam vel felis in velit ' +
        'placerat gravida nec sed dolor. Maecenas in ligula ut felis ullamcorper pharetra. Nulla facilisis justo ornare ' +
        'interdum tempus. ',
      optionSelected: false,
      options: ['LIPSUM 1', 'LIPSUM 2', 'LIPSUM 3', 'LIPSUM 4'],
      form: new FormGroup({
        question3: new FormControl('')
      })
    },
    {
      question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam, dolor sed molestie maximus, ' +
        'diam sapien hendrerit arcu, non molestie leo velit nec enim. Ut a condimentum ex. Nullam vel felis in velit ' +
        'placerat gravida nec sed dolor. Maecenas in ligula ut felis ullamcorper pharetra. Nulla facilisis justo ornare ' +
        'interdum tempus. ',
      optionSelected: false,
      options: ['LIPSUM 1', 'LIPSUM 2', 'LIPSUM 3', 'LIPSUM 4'],
      form: new FormGroup({
        question4: new FormControl('')
      })
    }
  ];

  constructor(
    private router: Router
  ) {
  }

  async returnToMenu(): Promise<void> {
    await this.router.navigate(['/home/lesson/1']);
  }
  async submitTest(): Promise<void> {
    if (!this.canBeSubmitted) return;
    await this.router.navigate(['/home/lesson/1']);
  }
}
