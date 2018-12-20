import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ReportSalaryPage } from '../report-salary/report-salary';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  report_salary() {
    console.log("test pass")
    this.navCtrl.push(ReportSalaryPage)
  }

}
