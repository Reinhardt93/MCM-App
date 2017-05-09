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

  public alertOpen:boolean = false;

  constructor(public navCtrl: NavController, public http:Http, private alertCtrl: AlertController, private toastCtrl: ToastController, public geolocation: Geolocation) {

    http.get("api/shops")
    .subscribe(
       //data => console.log(data.json().result) //this.test = data.json().result
       data => this.shops = data.json().result
     );

  }

  getData(){
    console.log(this.shops)
  }


  alertTest(storeName)
  {
    console.log(this.shops);

  //   this.alertOpen = true;
  //   let trump = this.alertCtrl.create({
  //     title: storeName,
  //     message: '<sebm-google-map> </sebm-google-map>'
  //   });
  // trump.present();
  }

}
