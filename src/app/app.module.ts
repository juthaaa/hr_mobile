import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { InformationPage } from '../pages/information/information';
import { SalaryPage } from '../pages/salary/salary';
import { SalaryHistoryPage } from '../pages/salary-history/salary-history';
import { FinePage } from '../pages/fine/fine';
import { InfoRevenuePage } from '../pages/info-revenue/info-revenue';
import { ReportSalaryPage } from '../pages/report-salary/report-salary';
import { SalaryHistoryDefinePage } from '../pages/salary-history-define/salary-history-define';
import { InfoRevenueAddPage } from '../pages/info-revenue-add/info-revenue-add';
import { ReportFinePage } from '../pages/report-fine/report-fine';
import { ReportSalaryDatePage } from '../pages/report-salary-date/report-salary-date';
import { InfoExpenditurePage } from '../pages/info-expenditure/info-expenditure';
import { InfoBankPage } from '../pages/info-bank/info-bank';
import { InfoFinePage } from '../pages/info-fine/info-fine';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { UserdataProvider } from '../providers/userdata/userdata';

import { HttpModule } from '@angular/http';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    InformationPage,
    SalaryPage,
    SalaryHistoryPage,
    FinePage,
    InfoRevenuePage,
    ReportSalaryPage,
    SalaryHistoryDefinePage,
    InfoRevenueAddPage,
    ReportFinePage,
    ReportSalaryDatePage,
    InfoExpenditurePage,
    InfoBankPage,
    InfoFinePage
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    InformationPage,
    SalaryPage,
    SalaryHistoryPage,
    FinePage,
    InfoRevenuePage,
    ReportSalaryPage,
    SalaryHistoryDefinePage,
    InfoRevenueAddPage,
    ReportFinePage,
    ReportSalaryDatePage,
    InfoExpenditurePage,
    InfoBankPage,
    InfoFinePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserdataProvider
  ]
})
export class AppModule {}
