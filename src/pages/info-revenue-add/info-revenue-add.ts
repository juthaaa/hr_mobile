import { Component } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';

import { CurrencydataProvider } from '../../providers/currencydata/currencydata';

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

  constructor(public navCtrl: NavController, public currency: CurrencydataProvider) {
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
  addRevenue(name_revenue,val_currency){
    
    
    console.log(name_revenue);
    console.log(val_currency);
    
    
  }
  
}
