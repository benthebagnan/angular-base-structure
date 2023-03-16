import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-complex-form',
  templateUrl: './complex-form.component.html',
  styleUrls: ['./complex-form.component.scss'],
})
export class ComplexFormComponent implements OnInit {
  mainForm!: FormGroup;
  personalInfoForm!: FormGroup;
  contactPreferenceCtrl!: FormControl;
  phoneCtrl!: FormControl;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.initFormControls();
    this.initMainForm();
  }

  initMainForm() {
    this.mainForm = this.formBuilder.group({});
  }

  private initFormControls(): void {
    this.personalInfoForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
    });
    this.contactPreferenceCtrl = this.formBuilder.control('email');
    this.phoneCtrl = this.formBuilder.control('');
  }

  onSubmitForm(): void {}
}
