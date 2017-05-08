import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CampaignsPage } from '../campaigns/campaigns';
import { ShopsPage } from '../shops/shops';


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
  /*pushSettings(){
    this.nav.push(SettingsPage)
  }*/

}
