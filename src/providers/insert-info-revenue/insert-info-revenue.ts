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

  apiUrl: string = "http://10.80.6.160:1032"

  constructor(public http: HttpClient) {
    // console.log('Hello InsertInfoRevenueProvider Provider');
  }

  insertinfo_revenue(name,value) {

    // return new Promise((resolve, reject) => {
    //   this.http.post(this.apiUrl + '/users', JSON.stringify(data))
    //     .subscribe(res => {
    //       resolve(res);
    //     }, (err) => {
    //       reject(err);
    //     });
    // });
console.log("22222222222");

    console.log();
    let dayy = "2018-12-17 22:50:28"
    let data = { 're_type': name, 're_active': 'Y' ,'re_cu_id': value, 're_us_id': 12, 're_update': dayy}
    console.log(data);
    
    return this.http.post(this.apiUrl + '/insert_revenue', JSON.stringify(data), httpOptions).subscribe()
  }

  updateinfo_revenue(name,value){

  }

  deleteinfo_revenue(id){
    let data= {'re_id':id,'re_active':'N'}
    return this.http.post(this.apiUrl + '/delete_revenue', JSON.stringify(data), httpOptions).subscribe()
  }
}
