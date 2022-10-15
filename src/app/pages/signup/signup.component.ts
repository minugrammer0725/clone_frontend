import { Component, OnInit } from '@angular/core';

import {FormGroup, FormControl} from '@angular/forms';

import { SignupService } from 'src/app/services/signup.service';
import { AddressService } from 'src/app/services/address.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    street: new FormControl(''),
    city: new FormControl(''),
    zipcode: new FormControl('')
  });

  constructor(
    private signupService: SignupService,
    private addressService: AddressService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const {
      username, 
      email, 
      password,
      street,
      city,
      zipcode
      } = this.signupForm.getRawValue();
    
    
    // sign up user (+ automatically attach cart)
    let userInfo = {
      username, 
      email,
      password
    };

    this.signupService.signUp(userInfo).subscribe((user: any) => {
      // create address
      let userAddress = {
        user: user.id,
        street,
        city,
        zipcode
      };

      this.addressService.createAddress(userAddress).subscribe((address: any) => {
        console.log('user address created', address);
      })

    })


    this.signupForm.reset();

    // navigate to login
    this.router.navigate(['/signin']);
  }
}
