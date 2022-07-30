import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm = this.fb.group({
    firstName: [''],
    lastName: [''],
    email: ['', Validators.compose([Validators.required, Validators.email])],
    password: [''],
    confirmPassword: ['']
  }) 

  constructor(private fb: FormBuilder) { 

  }

  ngOnInit(): void {
  }

  signUp() {
    console.log(this.signupForm)
    
  }

}
