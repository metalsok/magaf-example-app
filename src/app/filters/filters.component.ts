import {Component, OnInit} from '@angular/core';
import {SelectValues} from "../select-value.model";

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  public specOptions: SelectValues;
  public balcony: boolean = false;
  public ssn: string = '';
  public postalCode: string = '';
  public floors: Array<number>;


  constructor() {
  }

  ngOnInit() {
    this.floors = Array.from(new Array(31), (val, index) => {
      return index
    });
    this.specOptions = [
      {
        key: 'low', value: 'Low'
      },
      {
        key: 'medium', value: 'Medium'
      },
      {
        key: 'high', value: 'High'
      }
    ]
  }

}
