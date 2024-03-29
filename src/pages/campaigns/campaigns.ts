import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';

import { Campaigns } from '../../models/campaigns';


@Component({
  selector: 'page-campaigns',
  templateUrl: 'campaigns.html'
})
export class CampaignsPage {

  public campaigns:Array<Campaigns> = new Array<Campaigns>();

  constructor(public navCtrl: NavController, public http:Http) {


    http.get("api/campaigns/active")
    .subscribe(
       data => this.campaigns = data.json().result
     );
  }

  consoleLogData(){
    console.log(this.campaigns);
  }
}
