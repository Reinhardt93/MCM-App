import { Component } from '@angular/core';
import { NavController, AlertController, ToastController } from 'ionic-angular';
import { Http } from '@angular/http';
import { Geolocation } from '@ionic-native/geolocation';
import { PopoverController } from 'ionic-angular';


import { Shops } from '../../models/shops';

import { ProfiloptikPage } from './subpages/profiloptik/profiloptik';
import { ThielePage } from './subpages/thiele/thiele';
import { PilgrimPage } from './subpages/pilgrim/pilgrim';
import { NeyePage } from './subpages/neye/neye';
import { MullersPage } from './subpages/mullers/mullers';
import { GlitterPage } from './subpages/glitter/glitter';

@Component({
  selector: 'page-shops',
  templateUrl: 'shops.html'
})
export class ShopsPage {

  public shops:Array<Shops> = new Array<Shops>();
  items:Array<Shops> = new Array<Shops>();
  searchQuery: string = '';

  classesMapping = {
    'ProfiloptikPage': ProfiloptikPage,
    'ThielePage': ThielePage,
    'PilgrimPage': PilgrimPage,
    'NeyePage':NeyePage,
    'MullersPage':MullersPage,
    'GlitterPage':GlitterPage
  };

  constructor(public navCtrl: NavController, public popoverCtrl: PopoverController, public http:Http, private alertCtrl: AlertController, private toastCtrl: ToastController, public geolocation: Geolocation) {
    http.get("api/shops")
    .subscribe(
       data => {
        this.shops = data.json().result;
        this.initializeItems();
    });
  }


  valueToObject(value) {
    return this.classesMapping[value];
  }

  presentPopover(page) {
    let value = this.valueToObject(page);
    let popover = this.popoverCtrl.create(value);
    popover.present();
  }


  initializeItems() {
    this.items = this.shops;
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.shopName.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }




}
