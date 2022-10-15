import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import {FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  isApplied = false;

  priceSelect = new FormGroup({
    priceLvl: new FormControl()
  });

  @Output() categoryEvent = new EventEmitter();
  @Output() ratingEvent = new EventEmitter();
  @Output() dTimeEvent = new EventEmitter();
  @Output() dFeeEvent = new EventEmitter();
  @Output() priceLvlEvent = new EventEmitter();
  @Output() resetEvent = new EventEmitter();

  // categories = [
  //   "chicken",
  //   "burgers",
  //   "drinks",
  //   "korean", 
  //   "snacks", 
  //   "desserts", 
  //   "sandwiches", 
  //   "mexican", 
  //   "fastfood", 
  //   "breakfast", 
  //   "asian", 
  //   "healthy", 
  //   "barbecue", 
  //   "salad", 
  //   "vegan", 
  //   "coffee", 
  //   "chinese", 
  //   "soup"];

  categories = [
    "chicken",
    "burgers",
    "drinks",
    "korean", 
    "snacks", 
    "desserts"
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onCategorySelect(category: string) {
    this.isApplied = true;
    this.categoryEvent.emit(category);
  }

  onRating() {
    this.isApplied = true;
    this.ratingEvent.emit();
  }

  onDeliveryTime() {
    this.isApplied = true;
    this.dTimeEvent.emit();
  }

  onPriceLevel(level: number) {
    this.isApplied = true;
    this.priceLvlEvent.emit(level);
  }

  onDeliveryFee() {
    this.isApplied = true;
    this.dFeeEvent.emit();
  }


  onReset() {
    this.isApplied = false;
    this.resetEvent.emit();
  }

}
