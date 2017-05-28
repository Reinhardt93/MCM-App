import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { CampaignsPage } from '../pages/campaigns/campaigns';
import { SettingsPage } from '../pages/settings/settings';

import { ShopsPage } from '../pages/shops/shops';
// Subpages for ShopsPage
import { ProfiloptikPage } from '../pages/shops/subpages/profiloptik/profiloptik';
import { GlitterPage } from '../pages/shops/subpages/glitter/glitter';
import { MullersPage } from '../pages/shops/subpages/mullers/mullers';
import { NeyePage } from '../pages/shops/subpages/neye/neye';
import { PilgrimPage } from '../pages/shops/subpages/pilgrim/pilgrim';
import { ThielePage } from '../pages/shops/subpages/thiele/thiele';


import { InformationPage } from '../pages/information/information';
// Subpages for InformationPage
import { ParkingPage } from '../pages/information/subpages/parking/parking';
import { BabyPage } from '../pages/information/subpages/babylounge/babylounge';
import { ArtPage } from '../pages/information/subpages/art/art';
import { WifiPage } from '../pages/information/subpages/wifi/wifi';
import { ToiletPage } from '../pages/information/subpages/toilet/toilet';
import { HandicapPage } from '../pages/information/subpages/handicap/handicap';
import { SmokingPage } from '../pages/information/subpages/smoking/smoking';
import { PrivatePage } from '../pages/information/subpages/private/private';
import { RulesPage } from '../pages/information/subpages/rules/rules';
import { GuardPage } from '../pages/information/subpages/guard/guard';
import { ReturnPage } from '../pages/information/subpages/return/return';
import { ContestPage } from '../pages/information/subpages/contest/contest';

import { Geolocation } from '@ionic-native/geolocation';
import { AgmCoreModule, SebmGoogleMapMarker} from 'angular2-google-maps/core';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CampaignsPage,
    ShopsPage,
    ProfiloptikPage,
    InformationPage,
    ParkingPage,
    BabyPage,
    ArtPage,
    WifiPage,
    ToiletPage,
    HandicapPage,
    SmokingPage,
    PrivatePage,
    RulesPage,
    GuardPage,
    ReturnPage,
    ContestPage,
    SettingsPage,
    GlitterPage,
    MullersPage,
    NeyePage,
    PilgrimPage,
    ThielePage

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
    ProfiloptikPage,
    InformationPage,
    ParkingPage,
    BabyPage,
    ArtPage,
    WifiPage,
    ToiletPage,
    HandicapPage,
    SmokingPage,
    PrivatePage,
    RulesPage,
    GuardPage,
    ReturnPage,
    ContestPage,
    SettingsPage,
    GlitterPage,
    MullersPage,
    NeyePage,
    PilgrimPage,
    ThielePage
  ],
  providers: [
    StatusBar,
    Geolocation,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
