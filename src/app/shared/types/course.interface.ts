export interface AvailableCourses {
  1: Course;
  2: Course;
  3: Course;
  4: Course;
  5: Course;
  6: Course;
  [k: string]: Course;
}

export interface Course {
  lecture: Lecture;
  example: Example;
  exercise: Exercise;
  test: Test;
  grading: number;
}

export interface Lecture {
  lectureTitle: string;
  lectureContent: string;
  lectureVideoURL: string;
  lectureVideoDescription: string;
}

export interface Example {
  exampleTitle: string;
  exampleContent: string;
}

export interface Exercise {
  exerciseContent: string;
}

export interface Test {
  testStepContent: string[];
  testStepTypes: TestStepTypes[];
  testStep1: string[];
  testStep2: string[];
  testStep3: string[];
  testStep4: string[];
  testAudioURL1?: string;
  testAudioURL2?: string;
  testAudioURL3?: string;
  testAudioURL4?: string;
  testCorrectAnswer1: string | string[];
  testCorrectAnswer2: string | string[];
  testCorrectAnswer3: string | string[];
  testCorrectAnswer4: string | string[];
}

export enum TestStepTypes {
  INPUT_SELECTION = 'inputSelection',
  AUDIO_SELECTION = 'audioSelection',
  MULTIPLE_SELECTION = 'multipleSelection',
  FILL_BLANKS = 'fillBlanks'
}
