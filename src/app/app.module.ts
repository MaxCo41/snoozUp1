import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AccueilPage } from '../pages/accueil/accueil';
import { ParametresPage } from '../pages/parametres/parametres';
import { AlarmPage } from '../pages/alarm/alarm';
import { TabsPage } from '../pages/tabs/tabs';
import { ReglageAlarmePage } from '../pages/reglage-alarme/reglage-alarme';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AccueilPage,
    ParametresPage,
    AlarmPage,
    TabsPage,
    ReglageAlarmePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AccueilPage,
    ParametresPage,
    AlarmPage,
    TabsPage,
    ReglageAlarmePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
