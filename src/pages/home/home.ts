import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

import {Http} from '@angular/http';
import { Storage } from '@ionic/storage';

import { Settings } from '../../models/settings';
import { Test } from '../../models/test';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  public getLon:number;
  public getLat:number;

  public settings:Settings = new Settings();
  public test:Array<Test> = Array<Test>();

  constructor(public navCtrl: NavController, public navParams: NavParams, public http:Http, public geolocation: Geolocation, public storage: Storage) {

    // this.geolocation.getCurrentPosition().then((position) => {
    //   this.getLon = position.coords.longitude;
    //   this.getLat = position.coords.latitude;
    // });


   http.get("api/posts")
     .subscribe(
        data => this.test = data.json()
      );
        //this.currentWeather = data.json().weather["0"].description);
      console.log(this.test);
    }
}
