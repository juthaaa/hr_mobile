import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { InformationPage } from '../information/information';
import { SalaryPage } from '../salary/salary';
import { SalaryHistoryPage } from '../salary-history/salary-history';
import { FinePage } from '../fine/fine';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab_home = HomePage;
  tab_information = InformationPage;
  tab_salary = SalaryPage;
  tab_salary_history = SalaryHistoryPage;
  tab_fine = FinePage;
  constructor() {
    
  }
}
