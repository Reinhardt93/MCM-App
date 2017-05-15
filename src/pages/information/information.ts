import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

// Import Subpages
import { ParkingPage } from './subpages/parking/parking'; 
import { BabyPage } from './subpages/babylounge/babylounge'; 
import { ArtPage } from './subpages/art/art'; 
import { WifiPage } from './subpages/wifi/wifi'; 
import { ToiletPage } from './subpages/toilet/toilet'; 
import { HandicapPage } from './subpages/handicap/handicap'; 
import { SmokingPage } from './subpages/smoking/smoking'; 
import { PrivatePage } from './subpages/private/private'; 
import { RulesPage } from './subpages/rules/rules'; 
import { GuardPage } from './subpages/guard/guard'; 
import { ReturnPage } from './subpages/return/return'; 
import { ContestPage } from './subpages/contest/contest';

@Component({
  selector: 'page-information',
  templateUrl: 'information.html'
})
export class InformationPage {


  constructor(public navCtrl: NavController) {

  }

  pushParking(){
    this.navCtrl.push(ParkingPage);
  }
  pushBaby(){
    this.navCtrl.push(BabyPage);
  }
  pushArt(){
    this.navCtrl.push(ArtPage);
  }
  pushWifi(){
    this.navCtrl.push(WifiPage);
  }
  pushToilet(){
    this.navCtrl.push(ToiletPage);
  }
  pushHandicap(){
    this.navCtrl.push(HandicapPage);
  }
  pushSmoking(){
    this.navCtrl.push(SmokingPage);
  }
  pushPrivate(){
    this.navCtrl.push(PrivatePage);
  }
  pushRules(){
    this.navCtrl.push(RulesPage);
  }
  pushGuard(){
    this.navCtrl.push(GuardPage);
  }
  pushReturn(){
    this.navCtrl.push(ReturnPage);
  }
  pushContest(){
    this.navCtrl.push(ContestPage);
  }
}
