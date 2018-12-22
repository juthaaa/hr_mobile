
import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
/*
  Generated class for the CurrencydataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class RevenuedataProvider {

  constructor(public http: HttpClient) { }

  apiUrl: string = "http://10.80.6.160:1032"

  getcurrency() {
    return this.http.get(this.apiUrl + '/get_all_revenue', httpOptions)
  }

}
