import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message = '';

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    console.log('hi');
    this.loginService.getResponse().subscribe((res: any) => this.message = res.message);
  }

}
