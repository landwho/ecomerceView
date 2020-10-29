import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {headersToString} from 'selenium-webdriver/http';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http : HttpClient) { }



  host  = 'http://localhost:2020';




  post(serviceName:string , data:any){
    const headers = new HttpHeaders();
    const options = {headers: headers, withCredencials: false};

    const url = this.host + serviceName;

    return this.http.post(url, data, options);

  }

get(serviceName:string){
  const headers = new HttpHeaders();
  const options = {headers: headers, withCredencials: false};
  const url = this.host + serviceName;
  return this.http.get(url, options);
}




}
