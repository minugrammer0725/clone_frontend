import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  url = 'http://localhost:3000/api/restaurants';

  constructor(private http: HttpClient) { }

  getRestaurants() {
    return this.http.get(this.url);
  }

  getRestaurant(id: any) {
    return this.http.get(`${this.url}/${id}`);
  }
}
