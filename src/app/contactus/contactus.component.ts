import { Component, OnInit } from '@angular/core';

import { FormGroup, Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  loginForm: FormGroup;
  emailRegex: any;

  mobnumPattern: any;
  constructor(private formBuilder: FormBuilder) {
    this.emailRegex = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
    this.mobnumPattern = '^((\\+91-?))?[6-9]{1}[0-9]{9}$';
  this.loginForm = this.formBuilder.group({

    Name:  ['', Validators.required],

    email: ['', Validators.compose([Validators.required, Validators.pattern(this.emailRegex)])],
    PhoneNumber: ['', Validators.compose([ Validators.required, Validators.pattern(this.mobnumPattern)])]

  });
  }
  onSubmit() {
    console.log(this.loginForm);
    }
  ngOnInit() {
  }

}
