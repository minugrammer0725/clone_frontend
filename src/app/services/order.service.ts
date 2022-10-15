import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  
  url = 'http://localhost:3000/api/orders';

  constructor(private http: HttpClient) { }

  getUserOrders(userId: string) {
    return this.http.get(`${this.url}/user/${userId}`);
  }

}
