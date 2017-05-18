import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CampaignsPage } from '../campaigns/campaigns';
import { ShopsPage } from '../shops/shops';
import { InformationPage } from '../information/information';
import { SettingsPage } from '../settings/settings';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  classesMapping = {
    'ShopsPage': ShopsPage,
    'CampaignsPage': CampaignsPage,
    'InformationPage': InformationPage,
    'SettingsPage': SettingsPage
  }

  constructor(public nav: NavController) {
    this.nav = nav;
  }

  valueToObject(value) {
    return this.classesMapping[value];
  }
  goToPage(page) {
    let value = this.valueToObject(page);
    this.nav.push(value);
  }

}
