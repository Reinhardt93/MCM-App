import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Geolocation } from '@ionic-native/geolocation';

import { Shops } from '../../../../models/shops';

@Component({
  selector: 'page-neye',
  templateUrl: 'neye.html'
})
export class NeyePage {

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
