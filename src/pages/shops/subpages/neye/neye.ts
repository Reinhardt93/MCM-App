import { Component } from '@angular/core';
//import { NavController } from 'ionic-angular';
//import { ViewChild, ElementRef } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';
//import { PopoverController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-neye',
  templateUrl: 'neye.html'
})
export class NeyePage {

  constructor(public geolocation: Geolocation) {
  }
}
