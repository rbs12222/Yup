import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LaterPage } from './later';

@NgModule({
  declarations: [
    LaterPage,
  ],
  imports: [
    IonicPageModule.forChild(LaterPage),
  ],
})
export class LaterPageModule {}
