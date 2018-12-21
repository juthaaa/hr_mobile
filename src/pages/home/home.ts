import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ReportSalaryPage } from '../report-salary/report-salary';
import { ReportFinePage } from '../report-fine/report-fine';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  report_salary() {
    this.navCtrl.push(ReportSalaryPage)
  }

  report_fine(){
    this.navCtrl.push(ReportFinePage)
  }

}
