import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getResponse() {
    return this.http.get(this.url);
  }

}
