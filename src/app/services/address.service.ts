import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  
  url = 'http://localhost:3000/api/addresses';
  
  constructor(private http: HttpClient) {}

  createAddress(data: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    };

    return this.http.post(this.url, data, httpOptions);
  }

  getAddress(addressId: string) {
    return this.http.get(`${this.url}/${addressId}`);
  }

}
