import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlarmSetPage } from './alarm-set';

@NgModule({
  declarations: [AlarmSetPage],
  imports: [IonicPageModule.forChild(AlarmSetPage)],
  exports: [AlarmSetPage]
})
export class AlarmSetPageModule {}
