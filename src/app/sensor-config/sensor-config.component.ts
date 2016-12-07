import { Component, OnInit, Input } from '@angular/core';

import { Sensor } from '../sensor';
import { SensorListComponent } from '../sensorlist/sensorlist.component';
import { SensorFilterComponent } from '../sensorfilter/sensorfilter.component';
import { SensorsService } from '../sensors.service';

@Component({
  selector: 'app-sensor-config',
  templateUrl: './sensor-config.component.html',
  styleUrls: ['./sensor-config.component.css']
})
export class SensorConfigComponent implements OnInit {
  private sensors: Sensor[];
  constructor(private sensorsService: SensorsService) { }
  ngOnInit() {}

  refreshSensors() {
    this.sensorsService.discoverSensors().map(data => data.json()).subscribe(data => {
      console.log(data);
      this.sensors = data;
    });
  }
}
