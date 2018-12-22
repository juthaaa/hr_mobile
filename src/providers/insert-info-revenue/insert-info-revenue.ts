import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the InsertInfoRevenueProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class InsertInfoRevenueProvider {

  apiUrl: string = "http://127.0.0.1:112"

  constructor(public http: HttpClient) {
    // console.log('Hello InsertInfoRevenueProvider Provider');
  }

  insertinfo_revenue() {
    return this.http.get(this.apiUrl + '/insert_revenue', httpOptions)
  }
}
