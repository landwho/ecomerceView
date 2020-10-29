import { Component, Inject, OnInit } from '@angular/core';
import { AuthService} from '../../services/auth.service';
import { DOCUMENT } from '@angular/common';
import { ApiDataService} from '../api-data.service';
import {StorageService } from '../../services/storage.service';



@Component({
  selector: 'app-dashboard-cliente',
  templateUrl: './dashboard-cliente.component.html',
  styleUrls: ['./dashboard-cliente.component.css']
})
export class DashboardClienteComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document,private authService:AuthService, private _api: ApiDataService, 
  private storageService: StorageService) { }




  ngOnInit() {
    var month = new Date();
    let m = month.getMonth()+1 ; 
    console.log(m);


    this.getPaysToCard();
    this.getBG();

  }

  delete(id){
    console.log(id);
    let ID = id;
    console.log(ID);
    return this._api.deletePay(ID).subscribe((data)=>{
      console.log(data);
      this.document.location.reload();
    });
  }

data;
bgs;
transac;
paylod;
public name;
public image;
getBG(){
  return this._api.getBGs().subscribe((data)=>{
    this.data = data ;
    this.bgs = this.data.data;
    console.log(this.bgs );
  });
}

card;
getPaysToCard(){
  this.storageService.get('currentUserKey').then( (res) => {
    this.data = res.data
    console.log(this.data);
    this.card = this.data.NUMBER_CARD;
    console.log(this.card)
    this.getPays(this.card);
  });
}

pays;
getPays(id){
  return this._api.getPaysToCard(id).subscribe((data)=>{
    this.data = data;
    this.pays = this.data.data;
    console.log(this.pays);
  });
}


public getDetails:any;
array;
products;

getTransac(monto){
  this.getDetails={
    id: this.card,
    monto: monto
  }
console.log(  this.getDetails);
    return this._api.getPaysToCardDetail(this.getDetails).subscribe((data)=>{
      console.log(data);
      this.data = data;
      this.transac = this.data.data;
      console.log( this.transac)
      let obj = JSON.parse(JSON.stringify(this.transac));
          Object.entries(obj).forEach(([key, value]) => {
          this.data = value;
          this.array = this.data.PRODUCT
          this.products = JSON.parse(this.array)
          console.log(this.products)
          });
    }); 

}


































logout(){
  this.document.location.reload();
  return this.authService.logout();
}



changeTemporada(name,img){
  console.log(name)
if(name == 'halloween'){
 console.log(img)
  localStorage.removeItem('navidadTheme');
  localStorage.removeItem('cupidoTheme');
  localStorage.removeItem('DarkTheme');
  localStorage.removeItem('PatriotTheme');

  document.getElementsByTagName('body')[0].style.backgroundImage = "url("+`${img}`+")";
  var halloween = document.getElementsByTagName('body')[0].style.backgroundImage ="url("+`${img}`+")";
  document.getElementsByTagName('body')[0].style.color = 'white'; 
  localStorage.setItem('halloweenTheme', halloween);

  localStorage.getItem('halloweenTheme');
  document.getElementsByTagName('body')[0].style.backgroundImage = "url("+`${img}`+")";
}

if(name == 'navidad'){

  localStorage.removeItem('halloweenTheme');
  localStorage.removeItem('cupidoTheme');
  localStorage.removeItem('DarkTheme');
  localStorage.removeItem('PatriotTheme');

  document.getElementsByTagName('body')[0].style.backgroundImage ="url("+`${img}`+")";
  document.getElementsByTagName('body')[0].style.color = 'black'; 
  var navidad =  document.getElementsByTagName('body')[0].style.backgroundImage ="url("+`${img}`+")";    
  localStorage.setItem('navidadTheme', navidad);

  localStorage.getItem('navidadTheme')
  document.getElementsByTagName('body')[0].style.backgroundImage ="url("+`${img}`+")";


  /*var intro = document.getElementById('intro');
  intro.style.backgroundColor = '#FF00FF';*/

}

  if(name == 'loveDay'){
  
    localStorage.removeItem('navidadTheme');
    localStorage.removeItem('halloweenTheme');
    localStorage.removeItem('DarkTheme');
    localStorage.removeItem('PatriotTheme');

    document.getElementsByTagName('body')[0].style.backgroundImage ="url("+`${img}`+")";
    var cupido =  document.getElementsByTagName('body')[0].style.backgroundImage ="url("+`${img}`+")";
    document.getElementsByTagName('body')[0].style.color = 'white'; 
    localStorage.setItem('cupidoTheme', cupido);

    localStorage.getItem('cupidoTheme')
    document.getElementsByTagName('body')[0].style.backgroundImage = "url("+`${img}`+")";

  }


  if(name == 'DarkMode'){

    localStorage.removeItem('navidadTheme');
    localStorage.removeItem('halloweenTheme');
    localStorage.removeItem('cupidoTheme');
    localStorage.removeItem('PatriotTheme');

    document.getElementsByTagName('body')[0].style.backgroundImage ="url("+`${img}`+")";
    var dark =  document.getElementsByTagName('body')[0].style.backgroundImage ="url("+`${img}`+")";
    document.getElementsByTagName('body')[0].style.color = 'white'; 
    localStorage.setItem('DarkTheme', dark);

    localStorage.getItem('DarkTheme')
    document.getElementsByTagName('body')[0].style.backgroundImage = "url("+`${img}`+")";

  }


  if(name == 'Patriot'){

    localStorage.removeItem('navidadTheme');
    localStorage.removeItem('halloweenTheme');
    localStorage.removeItem('cupidoTheme');
    localStorage.removeItem('DarkTheme');

    document.getElementsByTagName('body')[0].style.backgroundImage ="url("+`${img}`+")";
    var patriot =  document.getElementsByTagName('body')[0].style.backgroundImage ="url("+`${img}`+")";
    document.getElementsByTagName('body')[0].style.color = 'white'; 
    localStorage.setItem('PatriotTheme', patriot);

    localStorage.getItem('PatriotTheme')
    document.getElementsByTagName('body')[0].style.backgroundImage = "url("+`${img}`+")";

  }


}



}
