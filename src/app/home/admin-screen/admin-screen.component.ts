import {Component, OnInit} from '@angular/core';
import {CourseService} from "../../shared/services/course/course.service";
import {AuthService} from "../../shared/services/auth/auth.service";
import {TableData} from "../../shared/types/user.interface";

@Component({
  selector: 'app-admin-screen',
  templateUrl: './admin-screen.component.html',
  styleUrls: ['./admin-screen.component.scss']
})
export class AdminScreenComponent implements OnInit{
  displayedColumns: string[] = ['id', 'name', 'lastName', 'lecture1', 'lecture2', 'lecture3', 'lecture4', 'lecture5', 'lecture6'];
  dataSource: TableData[] = [];

  constructor(
    private courseService: CourseService,
    private authService: AuthService
  ) {
  }

  async ngOnInit(): Promise<void> {
    let userId: string | null = localStorage.getItem('loggedId');
    if (userId === '0' && !this.authService.loggedUser) {
      await this.authService.loginAdmin();
    }
    await this.getUsersData();
  }

  async getUsersData(): Promise<void> {
    let usersData = await this.authService.getAll();
    usersData.forEach((user) => {
      this.dataSource.push({
        id: user.id,
        name: user.name,
        lastName: user.lastName,
        lecture1: user.notaCurso1,
        lecture2: user.notaCurso2,
        lecture3: user.notaCurso3,
        lecture4: user.notaCurso4,
        lecture5: user.notaCurso5,
        lecture6: user.notaCurso6
      });
    });
  }
}
