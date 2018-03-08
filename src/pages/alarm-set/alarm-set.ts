import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: "page-alarm-set",
  templateUrl: "alarm-set.html"
})
export class AlarmSetPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad AlarmSetPage");
  }
}
