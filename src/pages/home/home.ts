import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ReportSalaryPage } from '../report-salary/report-salary';
import { ReportFinePage } from '../report-fine/report-fine';
import { ReportSalaryDatePage } from '../report-salary-date/report-salary-date';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  report_salary_date() {
    this.navCtrl.push(ReportSalaryDatePage)
  }

  report_fine(){
    this.navCtrl.push(ReportFinePage)
  }

  report_salary(){
    this.navCtrl.push(ReportSalaryPage)
  }

}
