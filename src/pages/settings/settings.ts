import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { Settings } from '../../models/settings';


@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  public settings:Settings = new Settings();

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage)
  {
    this.settings = new Settings();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
    this.getData()
  }

  getData() {
    this.storage.get('notification').then((val) => {
      this.settings.notification = val;
    });
    this.storage.get('newsletter').then((val) => {
      this.settings.newsletter = val
    });
  }

  setData(){
    this.storage.set('notification',this.settings.notification);
    this.storage.set('newsletter',this.settings.newsletter);
  }

}
