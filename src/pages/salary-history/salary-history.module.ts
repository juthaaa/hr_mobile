import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SalaryHistoryPage } from './salary-history';

@NgModule({
  declarations: [
    SalaryHistoryPage,
  ],
  imports: [
    IonicPageModule.forChild(SalaryHistoryPage),
  ],
})
export class SalaryHistoryPageModule {}
