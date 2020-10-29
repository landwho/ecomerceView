import { Inject, Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { StorageService } from './storage.service';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { AuthConstants } from 'src/models/auth-constants';
import { DOCUMENT } from '@angular/common';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData$ =new Subject<any>();
  //caretData$ = new Subject<any>();
//userData$ : string[] = [];
  //userData$ =  new BehaviorSubject('');

  constructor(@Inject(DOCUMENT) private document: Document, private httpService:HttpService, private storageService:StorageService, 
  private router: Router) { }
  
//  console.log( this.storageService.get('caret'));


  getUserData(){
    this.storageService.get(AuthConstants.AUTH).then(response =>{
    this.userData$.next(response);  
    //console.log( this.storageService.get('caret'));
    //this.caretData$.next(this.storageService.get('caret'));
    });

  }



  

  login(postData:any):Observable<any>{
    this.router.navigate(['/dashboard']);
    return this.httpService.post("/api/login", postData);
  }

  
 
  getDashboard(id){
    return this.httpService.get("/v1/delivery/getdashboard/"+id);
  }





  logout(){
    this.storageService.removeItem(AuthConstants.AUTH).then(response=>{
    localStorage.removeItem('LIMIT_CARD'); 
    localStorage.removeItem('CVC_CARD'); 
    localStorage.removeItem('userRecurrent'); 
    localStorage.removeItem('NUMBER_CARD'); 



      this.router.navigate(['/landing']);
      this.userData$.next('');
      this.document.location.reload();

    });
  }

}
