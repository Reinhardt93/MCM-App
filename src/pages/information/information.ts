import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

// Import Subpages
import { ParkingPage } from './subpages/parking/parking';

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

}
