import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ReportSalaryPage } from '../report-salary/report-salary';
import { ReportFinePage } from '../report-fine/report-fine';
import { ReportSalaryDatePage } from '../report-salary-date/report-salary-date';

import { UserdataProvider } from '../../providers/userdata/userdata';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  arr_person:any
  constructor(public navCtrl: NavController, public user: UserdataProvider ) {
    
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

  ionViewDidLoad(){
    this.user.getperson().subscribe((response) => {
      //resolve(data);
      this.arr_person = response
      console.log(this.arr_person);
      
    },
      err => {
        console.log(err.type)
      })
  }
  
}
