import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReportSalaryPage } from './report-salary';

@NgModule({
  declarations: [
    ReportSalaryPage,
  ],
  imports: [
    IonicPageModule.forChild(ReportSalaryPage),
  ],
})
export class ReportSalaryPageModule {}
