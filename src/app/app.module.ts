import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { CampaignsPage } from '../pages/campaigns/campaigns';
import { ShopsPage } from '../pages/shops/shops';
//import { SettingsPage } from '../pages/settings/settings;

import { InformationPage } from '../pages/information/information';
// Subpages for InformationPage
import { ParkingPage } from '../pages/information/subpages/parking/parking'


import { Geolocation } from '@ionic-native/geolocation';
import { AgmCoreModule} from 'angular2-google-maps/core';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CampaignsPage,
    ShopsPage,
    InformationPage,
    ParkingPage
    //SettingsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCQ5y5QWFgwnnW6GnBUpWrVJ37YRSka91A'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CampaignsPage,
    ShopsPage,
    InformationPage,
    ParkingPage
    //SettingsPage
  ],
  providers: [
    StatusBar,
    Geolocation,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
