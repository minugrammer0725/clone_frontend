import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { AddressService } from 'src/app/services/address.service';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  restaurants: any = [];
  loggedIn!: boolean;
  userAddress: string = 'enter address';
  userId = '';

  constructor(
    private restaurantService: RestaurantService,
    private addressService: AddressService,
    ) { }

  ngOnInit(): void {
    this.loggedIn = window.localStorage.getItem('token') ? true : false;
    let user = window.localStorage.getItem('user');
    this.userId = user ? JSON.parse(user)?.id : '';
    let addressId = user ? JSON.parse(user)?.address : '';
    if (addressId) {
      // use address service to get the address with address id.
      this.addressService.getAddress(addressId).subscribe((address: any) => {
        this.userAddress = address?.street;
      })
    }


    this.restaurantService.getRestaurants().subscribe((restaurants) => {
      this.restaurants = restaurants;
    })
  }

  selectCategory(category: string) {
    this.restaurantService.getRestaurants().subscribe((restaurants: any) => {
      this.restaurants = restaurants.filter((restaurant: any) => restaurant.categories.includes(category));
    })
  }

  filterRating() {
    this.restaurants = this.restaurants.filter((restaurant: any) => restaurant.rating >= 4.5);
  }

  filterDeliveryFee() {
    this.restaurants = this.restaurants.filter((restaurant: any) => restaurant.deliveryFee < 2);
  }

  filterDeliveryTime() {
    this.restaurants = this.restaurants.filter((restaurant: any) => restaurant.deliveryTime <= 30);
  }

  filterPriceLevel(level: number) {
    this.restaurants = this.restaurants.filter((restaurant: any) => restaurant.priceLevel >= level);
  }

  resetFilters() {
    this.restaurantService.getRestaurants().subscribe((restaurants) => {
      this.restaurants = restaurants;
    })
  }

  search(term: string) {
    // search term should search from all results
    this.restaurantService.getRestaurants().subscribe((restaurants: any) => {
      this.restaurants = restaurants.filter((restaurant: any) => {
        // 1) restaurant's name, categories
        let restaurantNameMatch = restaurant?.name.toLowerCase().includes(term);
        let restaurantCategoryMatch = restaurant?.categories.some((category: any) => {
          return category.includes(term);
        })
        // 2) all the dishes and its names
        let dishNameMatch = restaurant?.menu.some((dish: any) => {
          return dish?.name.includes(term);
        })

        return restaurantNameMatch || restaurantCategoryMatch || dishNameMatch;
      })
    })

  }

  signout() {
    // signout user
    window.localStorage.clear();
    window.location.reload();
  }

}
