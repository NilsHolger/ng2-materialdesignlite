import { Component, OnInit, Input } from '@angular/core';
import { Sensor } from '../sensor';

@Component({
  selector: 'app-sensor-list',
  templateUrl: './sensorlist.component.html',
  styleUrls: ['./sensorlist.component.css']
})
export class SensorListComponent implements OnInit {
  @Input()
  sensors: Sensor[];

  constructor() { }

  ngOnInit() {
  }

}
