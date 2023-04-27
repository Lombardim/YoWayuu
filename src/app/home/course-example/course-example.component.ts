import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-course-example',
  templateUrl: './course-example.component.html',
  styleUrls: ['./course-example.component.scss']
})
export class CourseExampleComponent {
  lectureBody: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam, dolor sed molestie maximus, diam sapien hendrerit arcu, non molestie leo velit nec enim. Ut a condimentum ex. Nullam vel felis in velit placerat gravida nec sed dolor. Maecenas in ligula ut felis ullamcorper pharetra. Nulla facilisis justo ornare interdum tempus. Phasellus consequat tellus est, ut convallis erat feugiat at. Aliquam ac dui id enim sollicitudin venenatis sed vitae nulla. Aliquam mattis bibendum leo sed facilisis. Praesent diam nunc, laoreet pharetra rutrum in, tempus et est. Curabitur fringilla est odio, tincidunt rhoncus libero posuere vitae. Suspendisse lobortis ante nec ex aliquet, eu gravida enim finibus.\n' +
    '\n' +
    '\n' +
    '- Morbi semper malesuada justo ut porttitor. Etiam elementum hendrerit ligula quis efficitur. Nunc ac sapien facilisis, euismod neque at, pellentesque nulla.\n' +
    '- Curabitur nisl leo, convallis a hendrerit quis, blandit a ligula. Etiam at fermentum odio. Aenean cursus risus vel odio vulputate accumsan.\n' +
    '- Mauris tortor urna, iaculis quis tellus vel, porttitor egestas metus. Nam nec est faucibus, congue dolor vel, egestas nulla\n' +
    '- Sed ligula odio, fringilla ut pellentesque eget, bibendum ut tellus. Morbi dignissim tortor malesuada massa congue, nec rutrum orci gravida.\n' +
    '- Nunc in eleifend eros, eget facilisis ante. Suspendisse ornare, felis ut tincidunt placerat, ex lorem congue diam, in vestibulum sapien nisi quis metus.';

  constructor(
    private router: Router
  ) {
  }

  async returnToMenu(): Promise<void> {
    await this.router.navigate(['/home/lesson/1']);
  }
  async submitExample(): Promise<void> {
    await this.router.navigate(['/home/lesson/1']);
  }
}
