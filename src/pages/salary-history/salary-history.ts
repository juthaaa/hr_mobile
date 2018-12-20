import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { SalaryHistoryDefinePage } from '../salary-history-define/salary-history-define';

/**
 * Generated class for the SalaryHistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-salary-history',
  templateUrl: 'salary-history.html',
})
export class SalaryHistoryPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SalaryHistoryPage');
  }

  define_date_salary(){
    this.navCtrl.push(SalaryHistoryDefinePage)
  }
}
