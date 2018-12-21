import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { InfoRevenuePage } from '../info-revenue/info-revenue';
import { InfoExpenditurePage } from '../info-expenditure/info-expenditure';
import { InfoBankPage } from '../info-bank/info-bank';
import { InfoFinePage } from '../info-fine/info-fine';

/**
 * Generated class for the InformationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-information',
  templateUrl: 'information.html',
})
export class InformationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InformationPage');
  }

  info_revenuePage() {
    this.navCtrl.push(InfoRevenuePage)
  }

  info_expenditurePage() {
    this.navCtrl.push(InfoExpenditurePage)
  }
  
  info_bankPage() {
    this.navCtrl.push(InfoBankPage)
  }

  info_finePage(){
    this.navCtrl.push(InfoFinePage)
  }

}
