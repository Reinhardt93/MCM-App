import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CampaignsPage } from '../campaigns/campaigns';
import { ShopsPage } from '../shops/shops';
import { InformationPage } from '../information/information';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public nav: NavController) {
    this.nav = nav;
  }
  pushShops(){
    this.nav.push(ShopsPage)
  }
  pushCampaigns(){
    this.nav.push(CampaignsPage)
  }
  pushInformation(){
    this.nav.push(InformationPage)
  }
  /*pushSettings(){
    this.nav.push(SettingsPage)
  }*/

}
