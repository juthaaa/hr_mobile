import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { CurrencydataProvider } from '../../providers/currencydata/currencydata';
import { InsertInfoRevenueProvider } from '../../providers/insert-info-revenue/insert-info-revenue';
//import { jsonpCallbackContext } from '@angular/common/http/src/module';

/**
 * Generated class for the InfoRevenueAddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-info-revenue-add',
  templateUrl: 'info-revenue-add.html',
})
export class InfoRevenueAddPage {

  arr_currency: any
  data = {}
  constructor(public navCtrl: NavController, public currency: CurrencydataProvider, public add_revenue: InsertInfoRevenueProvider) {
  }

  ionViewDidLoad() {
    this.currency.getcurrency().subscribe((response) => {
      //resolve(data);
      this.arr_currency = response
      console.log(this.arr_currency);

    },
      err => {
        console.log(err.type)
      })
  }
  addRevenue() {

    // this.revenue.re_type = name_revenue
    // this.revenue.re_cu_id = val_currency
    // this.revenue.re_active = 'Y'
    // this.revenue.re_us_id = 12
    // this.revenue.re_update = new Date()
    console.log(this.data);
    
    console.log("11111111111111111");

    this.add_revenue.insertinfo_revenue(this.data["re_type"], this.data["re_cu_is"])
    this.navCtrl.pop()
    //console.log(name_revenue);
    //console.log(val_currency);
    //this.add_revenue.insertinfo_revenue(this.revenue)
  }

}
