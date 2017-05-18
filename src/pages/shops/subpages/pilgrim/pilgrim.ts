import { Component } from '@angular/core';
//import { NavController } from 'ionic-angular';
//import { ViewChild, ElementRef } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';
//import { PopoverController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-pilgrim',
  templateUrl: 'pilgrim.html'
})
export class PilgrimPage {

  constructor(public geolocation: Geolocation) {
  }
}
