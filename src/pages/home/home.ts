import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public nav: NavController) {
    this.nav = nav;
  }
  pushShops(){
    this.nav.push(AboutPage)
  }
  pushCampaigns(){
    this.nav.push(ContactPage)
  }

}
