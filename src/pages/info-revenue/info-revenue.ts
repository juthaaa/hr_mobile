import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { InfoRevenueAddPage } from '../info-revenue-add/info-revenue-add';

import { RevenuedataProvider } from '../../providers/revenuedata/revenuedata';

/**
 * Generated class for the InfoRevenuePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-info-revenue',
  templateUrl: 'info-revenue.html',
})
export class InfoRevenuePage {

  arr_revenue:any

  constructor(public navCtrl: NavController, public revenues: RevenuedataProvider) {
  }

  ionViewDidLoad() {
    this.revenues.getcurrency().subscribe((response) => {
      //resolve(data);
      this.arr_revenue = response
      console.log(this.arr_revenue);

    },
      err => {
        console.log(err.type)
      })
  }

  pop_page(){
    this.navCtrl.pop()
  }

  add_info_revenue(){
    this.navCtrl.push(InfoRevenueAddPage)
  }

}
