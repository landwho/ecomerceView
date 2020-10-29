import { Component, Inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {AuthService} from '../../services/auth.service';
import {StorageService } from '../../services/storage.service';
import { AuthConstants } from 'src/models/auth-constants';
import { ApiDataService} from '../api-data.service';
import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,private authService: AuthService, 
    private storageService:StorageService,private _api: ApiDataService, @Inject(DOCUMENT)  private document: Document) {}

  showFiller = false;

  data:any;
  userData:any;
  flag:boolean;
  flagOn:boolean;
  public count:any;
  public newSaldo;
  private currentUser = this.storageService.get('currentUserKey');

  ngOnInit() {
    this.getCurrentUser();
    this.count =localStorage.getItem('clickcount');
    //console.log(localStorage.getItem('clickcount'));
    this.newSaldo =localStorage.getItem('newSaldo');
    console.log(this.currentUser);
    //this.getUser();
   
  }


   getCurrentUser(){
    this.flag=false;
    this.authService.userData$.subscribe({
       next: (data)=>{ 
         this.data = data;
         this.userData = this.data.data;
         this.getUser();
         this.flagOn=true;
         console.log(this.userData);
         if(!this.userData){
           console.log("sfalkdsjflkadj");
           this.flag=true;
         }
       }
    }); 
  }

user;
public saldo;
public card;
public cvc;
getUser(){
  return this._api.getUser().subscribe((data)=>{
    
    this.data= data;
    this.user= this.data.data;
    console.log(this.user);
    console.log(JSON.stringify(this.user));
    localStorage.setItem('userRecurrent', JSON.stringify(this.user));

    Object.entries(this.user).forEach(([key, val])=>{
      console.log(val);
      this.data = val;
      this.saldo = this.data.LIMIT_CARD;
      this.card = this.data.NUMBER_CARD;
      this.cvc = this.data.CVC_CARD;
      localStorage.setItem('NUMBER_CARD', JSON.stringify(this.card));  
      localStorage.setItem('LIMIT_CARD', JSON.stringify(this.saldo));
      localStorage.setItem('CVC_CARD', JSON.stringify(this.cvc));

      console.log(this.saldo );
    })


  });
}
    
  


   /* async getCurrentUser(){
      this.flag=false;
     
   console.log( localStorage.getItem('currentUserKey'))


    

   }*/



   logout(){
    this.document.location.reload();
    return this.authService.logout();
  }



 
  

}
