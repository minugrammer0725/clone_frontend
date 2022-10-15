import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DishService {
  
  url = 'http://localhost:3000/api/dishes';

  constructor(private http: HttpClient) { }

  getDish(dishId: string) {
    return this.http.get(`${this.url}/${dishId}`);
  }

  

}
