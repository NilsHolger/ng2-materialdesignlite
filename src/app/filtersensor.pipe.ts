import { Pipe, PipeTransform } from '@angular/core';
import { Sensor } from './sensor';

@Pipe({
  name: 'filtersensor'
})
export class FilterSensorPipe implements PipeTransform {

  transform(value, [category] : string[]) {
    return value.filter((entry: Sensor) => {
          if (category && category !== '') {
            return entry.type === category;
          } else {
            return true;
          }
    });
  }

}
