import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { InfoRevenueAddPage } from '../info-revenue-add/info-revenue-add';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoRevenuePage');
  }

  pop_page(){
    this.navCtrl.pop()
  }

  add_info_revenue(){
    this.navCtrl.push(InfoRevenueAddPage)
  }

}
