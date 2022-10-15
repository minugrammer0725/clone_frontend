import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  @Output() searchEvent = new EventEmitter();

  searchForm = new FormGroup({
    searchBar: new FormControl('')  
  });

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    // emit event to notify parent
    this.searchEvent.emit(this.searchForm.getRawValue().searchBar?.toLowerCase());
  }

}
