import { Component } from '@angular/core';

import { AccueilPage } from '../accueil/accueil';
import { ParametresPage } from '../parametres/parametres';
import { AlarmPage } from '../alarm/alarm';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = AlarmPage;
  tab2Root = AccueilPage;
  tab3Root = ParametresPage;

  constructor() {

  }
}
