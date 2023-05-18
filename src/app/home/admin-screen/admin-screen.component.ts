import {Component, OnInit} from '@angular/core';
import {CourseService} from "../../shared/services/course/course.service";

@Component({
  selector: 'app-admin-screen',
  templateUrl: './admin-screen.component.html',
  styleUrls: ['./admin-screen.component.scss']
})
export class AdminScreenComponent implements OnInit{
  displayedColumns: string[] = ['id', 'name', 'lastName', 'lecture1', 'lecture2', 'lecture3', 'lecture4', 'lecture5', 'lecture6'];
  dataSource: any = [{
    id: 1,
    name: 'Miguel',
    lastName: 'Lombardi',
    lecture1: 0,
    lecture2: 0,
    lecture3: 0,
    lecture4: 0,
    lecture5: 0,
    lecture6: 0
  }];

  constructor(
    private courseService: CourseService
  ) {
  }

  ngOnInit() {
    this.dataSource[0].lecture1 = this.courseService.testResults;
  }
}
