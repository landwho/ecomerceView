import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild,  Router,  ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {StorageService } from '../services/storage.service';
import { AuthConstants } from 'src/models/auth-constants';
//import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class IndexGuard implements CanActivate, CanActivateChild {
  constructor(private navCtrl: Router,private router:Router, private storageService:StorageService){}
  canActivate():Promise<boolean>{

    return new Promise(resolve=>{
      this.storageService
      .get(AuthConstants.AUTH)
      .then( res => {
        if (res) {
          this.navCtrl.navigate(['./dashboard']);
            resolve(false);
         
          } else {
            resolve(true)
        
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
