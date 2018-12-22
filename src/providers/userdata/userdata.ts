
import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders} from '@angular/common/http';
// import 'rxjs/add/operator/map';
// import { map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserdataProvider {


  constructor(public http: HttpClient) { }

  apiUrl: string = "http://127.0.0.1:112"

  getperson() {
    return this.http.get(this.apiUrl + '/get_all_person', httpOptions)
  }



}