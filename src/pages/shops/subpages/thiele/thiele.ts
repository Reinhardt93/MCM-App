import { Component } from '@angular/core';
//import { NavController } from 'ionic-angular';
//import { ViewChild, ElementRef } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';
//import { PopoverController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-thiele',
  templateUrl: 'thiele.html'
})
export class ThielePage {

  constructor(public geolocation: Geolocation) {
  }
}
