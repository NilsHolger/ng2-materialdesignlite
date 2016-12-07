import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sensor-filter',
  templateUrl: './sensorfilter.component.html',
  styleUrls: ['./sensorfilter.component.css']
})
export class SensorFilterComponent implements OnInit {
  private selectedCategory: string;
  private categories: string[];

  @Output() filterChanges: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    this.categories = [
      'temperature',
      'humidity',
      'switch'
    ];
  }

  categoryChanged(value){
    this.selectedCategory = value;
    this.filterChanges.emit(this.selectedCategory);
  }

}
