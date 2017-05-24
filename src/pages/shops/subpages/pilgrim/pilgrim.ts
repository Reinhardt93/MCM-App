import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Geolocation } from '@ionic-native/geolocation';

import { Shops } from '../../../../models/shops';



@Component({
  selector: 'page-pilgrim',
  templateUrl: 'pilgrim.html'
})
export class PilgrimPage {
  public shops:Array<Shops> = new Array<Shops>();
  constructor(public geolocation: Geolocation, public http:Http)
  {
    http.get("api/shops")
    .subscribe(
       data => {
        this.shops = data.json().result;
    });
  }
}
