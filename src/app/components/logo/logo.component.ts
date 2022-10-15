import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent implements OnInit {
  appName = 'DOORDASH';
  
  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  onClick() {
    console.log('clicked');
    
    window.location.href = '/home';
    
    // this.route.navigate(['/home']);
    // window.location.reload();
  }

}
