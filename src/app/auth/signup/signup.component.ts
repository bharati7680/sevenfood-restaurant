import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { response } from 'express';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm = this.fb.group({
    email: ['', Validators.compose([Validators.required, Validators.email])],
    password: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
    confirmPassword: ['', Validators.compose([Validators.required, Validators.minLength(4)])]
  }) 

  constructor(private fb: FormBuilder, private authService: AuthService) { 

  }

  ngOnInit(): void {
  }

  signUp() {
    if (!this.signupForm.valid){
      alert("please enter all fields")
      return
    }
    const email = this.signupForm.get('email')!.value
    const password = this.signupForm.get('password')!.value
    const confirmPassword = this.signupForm.get('confirmPassword')!.value

    if( password !== confirmPassword ){
      alert("password does not match")
      return
    }

    this.authService.signup(email || "" , password || "").subscribe(
      (response: any) => {
        console.log(response)

      },
      (error: any) => {
        console.log(error)
      }
      
    )
    
  }

}
