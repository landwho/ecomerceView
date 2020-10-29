import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad, Router, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {StorageService } from '../services/storage.service';
import { AuthConstants } from 'src/models/auth-constants';


@Injectable({
  providedIn: 'root'
})
export class HomeGuard implements CanActivate, CanActivateChild {
 
 constructor(private navCtrl: Router,private router:Router, private storageService:StorageService){}
 
  canActivate():Promise<boolean>{

    return new Promise(resolve=>{
      this.storageService
      .get(AuthConstants.AUTH)
      .then( res => {
        if (res) {
           resolve(true)
          } else {
            //this.navCtrl.navigateRoot(['./sign-in']);
            this.router.navigate(['./landing']);
            resolve(false);
          }
      }).catch(err=>{
        resolve(false);
      })
    });
  }





  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }




}
