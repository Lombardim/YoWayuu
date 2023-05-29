export interface CourseCompletion {
  1: CompletionStatus[],
  2: CompletionStatus[],
  3: CompletionStatus[],
  4: CompletionStatus[],
  5: CompletionStatus[],
  6: CompletionStatus[],
  [k: string]: CompletionStatus[]
}
export interface CompletionStatus {
  section: string;
  completed: boolean;
  locked: boolean;
}

export interface CoursePercentageProgress {
  1: number,
  2: number,
  3: number,
  4: number,
  5: number,
  6: number,
  [k: string]: number
}
