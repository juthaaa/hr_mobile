import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the InfoRevenueUpdatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-info-revenue-update',
  templateUrl: 'info-revenue-update.html',
})
export class InfoRevenueUpdatePage {
  re_id:any
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.re_id = navParams.get('re_id')
  }

  ionViewDidLoad() {
      console.log(this.re_id)
  }

}
