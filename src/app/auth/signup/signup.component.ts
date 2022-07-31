import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm = this.fb.group({
    firstName: ['', Validators.compose([Validators.required])],
    lastName: ['', Validators.compose([Validators.required])],
    email: ['', Validators.compose([Validators.required, Validators.email])],
    password: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
    confirmPassword: ['', Validators.compose([Validators.required, Validators.minLength(8)])]
  }) 

  constructor(private fb: FormBuilder) { 

  }

  ngOnInit(): void {
  }

  signUp() {
    console.log(this.signupForm)
    
  }

}
