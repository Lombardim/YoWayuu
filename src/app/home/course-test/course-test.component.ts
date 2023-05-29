import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CourseService} from "../../shared/services/course/course.service";
import {MatDialog} from "@angular/material/dialog";
import {TestDialogComponent} from "../../shared/components/test-dialog/test-dialog.component";
import {Course, Test} from "../../shared/types/course.interface";
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-course-test',
  templateUrl: './course-test.component.html',
  styleUrls: ['./course-test.component.scss']
})
export class CourseTestComponent {
  public currentStep: number = 1;
  public testData?: Test;
  public testForm: FormGroup = new FormGroup({
    step1: new FormControl('', [Validators.required]),
    step2: new FormControl('', [Validators.required]),
    step3: new FormControl('', [Validators.required]),
    step4: new FormControl('', [Validators.required])
  });
  public unorderedList: string[] = [];
  public orderedList: string[] = [];

  constructor(
    private dialog: MatDialog,
    private router: Router,
    public courseService: CourseService
  ) { }

  async ngOnInit(): Promise<void> {
    const courseData: Course = await this.courseService.getCourseData(this.courseService.currentLesson.toString());
    this.testData = courseData.test;
    this.getUnorderedList();
  }

  getUnorderedList() {
    if (this.testData?.testCorrectAnswer1 instanceof Array<string>) {
      this.unorderedList = this.shuffleArray([...this.testData.testCorrectAnswer1]);
    }
    if (this.testData?.testCorrectAnswer2 instanceof Array<string>) {
      this.unorderedList = this.shuffleArray([...this.testData.testCorrectAnswer2]);
    }
    if (this.testData?.testCorrectAnswer3 instanceof Array<string>) {
      this.unorderedList = this.shuffleArray([...this.testData.testCorrectAnswer3]);
    }
    if (this.testData?.testCorrectAnswer4 instanceof Array<string>) {
      this.unorderedList = this.shuffleArray([...this.testData.testCorrectAnswer4]);
    }
  }

  shuffleArray(array: string[]): string[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  async returnToMenu(): Promise<void> {
    await this.router.navigate(['/home/lesson/' + this.courseService.currentLesson]);
  }

  async submitTest(): Promise<void> {
    if (this.courseService.coursesData && this.courseService.coursesData[this.courseService.currentLesson.toString()].grading === 4) {
      await this.router.navigate(['/home/lesson/' + this.courseService.currentLesson]);
    }
    if (this.currentStep < 4) return;
    if(this.testForm.get('step4')?.valid) {
      if (this.courseService.levelProgress[this.courseService.currentLesson.toString()] === 75 || this.courseService.coursesData && this.courseService.coursesData[this.courseService.currentLesson.toString()].grading < 4) {
        let testResults = 0;
        if (this.testData?.testCorrectAnswer1 instanceof Array<string>) {
          let isDifferent = false;
          let i = 0;
          if (this.orderedList.length === this.testData.testCorrectAnswer1.length) {
            while(i < this.orderedList.length && !isDifferent) {
              if (this.orderedList[i] !== this.testData?.testCorrectAnswer1[i]) {
                isDifferent = true;
              }
              i++;
            }
          }
          if (!isDifferent) {
            testResults += 1;
          }
        } else {
          if (this.testForm.get('step1')?.value.toLowerCase() === this.testData?.testCorrectAnswer1.toLowerCase()) {
            testResults += 1;
          }
        }

        if (this.testData?.testCorrectAnswer2 instanceof Array<string>) {
          let isDifferent = false;
          let i = 0;
          if (this.orderedList.length === this.testData.testCorrectAnswer2.length) {
            while(i < this.orderedList.length && !isDifferent) {
              if (this.orderedList[i] !== this.testData?.testCorrectAnswer2[i]) {
                isDifferent = true;
              }
              i++;
            }
          }
          if (!isDifferent) {
            testResults += 1;
          }
        } else {
          if (this.testForm.get('step2')?.value.toLowerCase() === this.testData?.testCorrectAnswer2.toLowerCase()) {
            testResults += 1;
          }
        }

        if (this.testData?.testCorrectAnswer3 instanceof Array<string>) {
          let isDifferent = false;
          let i = 0;
          if (this.orderedList.length === this.testData.testCorrectAnswer3.length) {
            while(i < this.orderedList.length && !isDifferent) {
              if (this.orderedList[i] !== this.testData?.testCorrectAnswer3[i]) {
                isDifferent = true;
              }
              i++;
            }
          }
          if (!isDifferent) {
            testResults += 1;
          }
        } else {
          if (this.testForm.get('step3')?.value.toLowerCase() === this.testData?.testCorrectAnswer3.toLowerCase()) {
            testResults += 1;
          }
        }

        if (this.testData?.testCorrectAnswer4 instanceof Array<string>) {
          let isDifferent = false;
          let i = 0;
          if (this.orderedList.length === this.testData.testCorrectAnswer4.length) {
            while(i < this.orderedList.length && !isDifferent) {
              if (this.orderedList[i] !== this.testData?.testCorrectAnswer4[i]) {
                isDifferent = true;
              }
              i++;
            }
          }
          if (!isDifferent) {
            testResults += 1;
          }
        } else {
          if (this.testForm.get('step4')?.value.toLowerCase() === this.testData?.testCorrectAnswer4.toLowerCase()) {
            testResults += 1;
          }
        }
        this.courseService.levelProgress[this.courseService.currentLesson.toString()]+= 25;
        this.courseService.lessonCompletionStatus[this.courseService.currentLesson.toString()][3].completed = true;
        if(this.courseService.coursesData) {
          this.courseService.coursesData[this.courseService.currentLesson.toString()].grading = testResults;
          await this.courseService.updateCourseGrading();
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
    return this.courseService.levelProgress[this.courseService.currentLesson.toString()];
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

  selectOption(option: string, field: 'step1' | 'step2' | 'step3' | 'step4') {
    this.testForm.get(field)?.setValue(option);
    this.testForm.get(field)?.markAsDirty();
  }

  playSound(step: 1 | 2 | 3 | 4) {
    let audio = new Audio();
    if (step === 1 && this.testData?.testAudioURL1) audio.src = this.testData?.testAudioURL1;
    if (step === 2 && this.testData?.testAudioURL2) audio.src = this.testData?.testAudioURL2;
    if (step === 3 && this.testData?.testAudioURL3) audio.src = this.testData?.testAudioURL3;
    if (step === 4 && this.testData?.testAudioURL4) audio.src = this.testData?.testAudioURL4;
    audio.load();
    audio.play();
  }

  drop(event: CdkDragDrop<string[]>, field: string) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
    if(this.orderedList.length === this.testData?.testCorrectAnswer1.length ||
      this.orderedList.length === this.testData?.testCorrectAnswer2.length ||
      this.orderedList.length === this.testData?.testCorrectAnswer3.length ||
      this.orderedList.length === this.testData?.testCorrectAnswer4.length) {
      this.testForm.get(field)?.setValue(this.orderedList.join(','));
    }
  }
}
