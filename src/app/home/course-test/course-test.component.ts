import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CourseService} from "../../shared/services/course/course.service";
import {MatDialog} from "@angular/material/dialog";
import {TestDialogComponent} from "../../shared/components/test-dialog/test-dialog.component";

@Component({
  selector: 'app-course-test',
  templateUrl: './course-test.component.html',
  styleUrls: ['./course-test.component.scss']
})
export class CourseTestComponent {
  public currentStep: number = 1;
  public testForm: FormGroup = new FormGroup({
    step1: new FormControl('', [Validators.required]),
    step2: new FormControl('', [Validators.required]),
    step3: new FormControl('', [Validators.required]),
    step4: new FormControl('', [Validators.required])
  });
  constructor(
    private dialog: MatDialog,
    private router: Router,
    public courseService: CourseService
  ) { }

  async returnToMenu(): Promise<void> {
    await this.router.navigate(['/home/lesson/' + this.courseService.currentLesson]);
  }

  async submitTest(): Promise<void> {
    if (this.currentStep < 4) return;
    if(this.testForm.get('step4')?.valid) {
      if (this.courseService.currentLesson === 1) {
        if (this.courseService.basicLevel1Progress === 75) {
          this.courseService.basicLevel1Progress += 25;
          if (this.testForm.get('step1')?.value === this.courseService.test1CorrectAnswer1) {
            this.courseService.testResults += 1;
          }
          if (this.testForm.get('step2')?.value === this.courseService.test1CorrectAnswer2) {
            this.courseService.testResults += 1;
          }
          if (this.testForm.get('step3')?.value === this.courseService.test1CorrectAnswer3) {
            this.courseService.testResults += 1;
          }
          if (this.testForm.get('step4')?.value === this.courseService.test1CorrectAnswer4) {
            this.courseService.testResults += 1;
          }
          this.courseService.lesson1CompletionStatus[3].completed = true;
        }
      }

      this.openDialog();
    }
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(TestDialogComponent);

    dialogRef.afterClosed().subscribe(async () => {
      await this.router.navigate(['/home/lesson/' + this.courseService.currentLesson]);
    });
  }
  getCurrentCompletion() {
    return this.courseService.currentLesson === 1 ? this.courseService.basicLevel1Progress : this.courseService.basicLevel2Progress;
  }

  previousStep() {
    this.currentStep--;
  }

  nextStep(currentStep: number) {
    if (!this.testForm.get('step' + currentStep)?.valid) {
      return;
    }
    this.currentStep++;
  }

  selectOption(option: string) {
    this.testForm.get('step4')?.setValue(option);
    this.testForm.get('step4')?.markAsDirty();
  }

  playSound() {
    let audio = new Audio();
    audio.src = "../../../assets/audios/muusa.wav";
    audio.load();
    audio.play();
  }
}
