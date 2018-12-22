
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
export class CurrencydataProvider {

  constructor(public http: HttpClient) { }

  apiUrl: string = "http://127.0.0.1:112"

  getcurrency() {
    return this.http.get(this.apiUrl + '/get_all_currency', httpOptions)
  }


}