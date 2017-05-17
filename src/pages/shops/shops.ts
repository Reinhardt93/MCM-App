import { Component } from '@angular/core';
import { NavController, AlertController, ToastController } from 'ionic-angular';
import { Http } from '@angular/http';
import { Geolocation } from '@ionic-native/geolocation';
import { Shops } from '../../models/shops';


@Component({
  selector: 'page-shops',
  templateUrl: 'shops.html'
})
export class ShopsPage {

  public shops:Array<Shops> = new Array<Shops>();
  //items:Array<string> = new Array<string>();
  items:Array<Shops> = new Array<Shops>();
  searchQuery: string = '';


  constructor(public navCtrl: NavController, public http:Http, private alertCtrl: AlertController, private toastCtrl: ToastController, public geolocation: Geolocation) {
    http.get("api/shops")
    .subscribe(
       data => {
        this.shops = data.json().result;
        this.initializeItems();
    });
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
