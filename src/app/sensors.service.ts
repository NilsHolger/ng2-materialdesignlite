import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class SensorsService {

  constructor(private http: Http) { }

  discoverSensors() {
    return this.http.get('/assets/data/newsensors.json');
  }

}
