import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InfoBankPage } from './info-bank';

@NgModule({
  declarations: [
    InfoBankPage,
  ],
  imports: [
    IonicPageModule.forChild(InfoBankPage),
  ],
})
export class InfoBankPageModule {}
