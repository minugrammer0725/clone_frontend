import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { Router } from '@angular/router';

import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  showErrorMsg = false;

  signinForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private loginService: LoginService ,private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const {email, password} = this.signinForm.getRawValue();
    let userInfo = {
      email,
      password
    };

    const observer = {
      next: ({token, user}: any) => {
        // save user info and token on frontend local storage
        window.localStorage.setItem('user', JSON.stringify(user));
        window.localStorage.setItem('token', token);

        this.showErrorMsg = false;
        this.signinForm.reset();

        // redirect to home page
        this.router.navigate(['/home']);
      },
      error: () => {
        this.showErrorMsg = true;

        this.signinForm.reset();
      }
    };

    this.loginService.login(userInfo).subscribe(observer);

  }
}
