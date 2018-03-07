import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ReglageAlarmePage } from '../reglage-alarme/reglage-alarme';


@Component({
  selector: 'page-home',
  templateUrl: 'alarm.html'
})
export class AlarmPage {

  pushPage = ReglageAlarmePage;

  constructor(public navCtrl: NavController) {

  }

}
