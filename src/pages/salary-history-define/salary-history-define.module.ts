import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SalaryHistoryDefinePage } from './salary-history-define';

@NgModule({
  declarations: [
    SalaryHistoryDefinePage,
  ],
  imports: [
    IonicPageModule.forChild(SalaryHistoryDefinePage),
  ],
})
export class SalaryHistoryDefinePageModule {}
