import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { InfoRevenueAddPage } from '../info-revenue-add/info-revenue-add';
import { InfoRevenueUpdatePage } from '../info-revenue-update/info-revenue-update';


import { RevenuedataProvider } from '../../providers/revenuedata/revenuedata';
import { InsertInfoRevenueProvider } from '../../providers/insert-info-revenue/insert-info-revenue';

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
  constructor(public navCtrl: NavController, public revenues: RevenuedataProvider, public update_revenue: InsertInfoRevenueProvider) {
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

  edit_info_revenue(id){
    this.navCtrl.push(InfoRevenueUpdatePage,{re_id:id})
  }

  delete_info_revenue(id){
    console.log("77777");
    
    console.log(id);
    
    this.update_revenue.deleteinfo_revenue(id)
  } 

}
