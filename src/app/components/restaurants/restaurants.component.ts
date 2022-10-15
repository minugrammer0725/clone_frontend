import { Component, OnInit, Input } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

  @Input() restaurants: any = [];

  constructor(private route: Router) { }

  ngOnInit(): void {
  
  }

  onClick(restaurant: any) {
    this.route.navigate([`/restaurant/${restaurant.id}`]);
  }

}
