import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {
  restaurantId = '';
  restaurant: any = null;
  loggedIn!: boolean;
  user: any;

  constructor(
    private route: ActivatedRoute,
    private restaurantService: RestaurantService 
  ) {
  }

  ngOnInit(): void {
    //
    this.loggedIn = window.localStorage.getItem('token') ? true : false;
    this.user = JSON.parse(window.localStorage.getItem('user') || ''); 

    this.route.params.subscribe((params) => {
      this.restaurantId = params['restaurantId']
      // load restaurant from backend
      this.restaurantService.getRestaurant(this.restaurantId).subscribe((restaurant) => {
        this.restaurant = restaurant;
      })
    });
  }

  signout() {
    window.localStorage.clear();
    window.location.reload();
  }

}
