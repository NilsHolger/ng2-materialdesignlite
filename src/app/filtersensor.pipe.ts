import { Pipe, PipeTransform } from '@angular/core';
import { Sensor } from './sensor';

@Pipe({
  name: 'filtersensor'
})
export class FilterSensorPipe implements PipeTransform {

  transform(value, category) {
    console.log(category);
    console.log(value);
    return value.filter((entry: Sensor) => {
          if (category && category !== '') {
            console.log('filtersensor' + entry + category);
            return entry.type === category;
          } else {
            return true;
          }
    });
  }

}
