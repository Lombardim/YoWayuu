import {FormGroup} from "@angular/forms";

export interface Test {
  question: string;
  options: string[];
  optionSelected: boolean;
  form: FormGroup;
}
