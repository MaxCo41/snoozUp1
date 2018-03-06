import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { SettingsPage } from '../settings/settings';
import { AlarmPage } from "../alarm/alarm";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = AlarmPage;
  tab2Root = HomePage;
  tab3Root = SettingsPage;

  constructor() {

  }
}
