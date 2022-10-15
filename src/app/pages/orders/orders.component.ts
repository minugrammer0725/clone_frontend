import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Router } from '@angular/router';

import { OrderService } from 'src/app/services/order.service';
import { AddressService } from 'src/app/services/address.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  userId = '';
  pendingOrders = [];
  completedOrders = [];
  user !: any;
  address !: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private orderService: OrderService,
    private addressService: AddressService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.userId = params['userId']
      // load all orders for user 
      this.orderService.getUserOrders(this.userId).subscribe((orders: any) => {
        // set user
        this.user = orders[0]?.user;

        // set orders (pending / completed)
        this.completedOrders = orders.filter((order: any) => order?.status !== 'pending');
        this.pendingOrders = orders.filter((order: any) => order?.status === 'pending');

        // set address via service
        this.addressService.getAddress(this.user?.address).subscribe((address: any) => {
          this.address = address;
        })

      })
    });


  }
  
  signout() {
    // signout user
    window.localStorage.clear();
    window.location.href = '/home';
  }

  navigate(restaurantId: string) {
    this.router.navigate([`/restaurant/${restaurantId}`])
  }


}
