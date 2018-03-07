import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ReglageAlarmePage } from '../reglage-alarme/reglage-alarme';


@Component({
  selector: 'page-accueil',
  templateUrl: 'accueil.html'
})
export class AccueilPage {

  plusPage = ReglageAlarmePage;

  constructor(public navCtrl: NavController) {

  }

}
