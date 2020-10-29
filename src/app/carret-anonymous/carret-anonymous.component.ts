import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import {StorageService } from '../../services/storage.service';
import {MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CompraExitosaComponent } from 'src/app/alerts/compra-exitosa/compra-exitosa.component';
import { LimiteCreditoComponent } from 'src/app/alerts/limite-credito/limite-credito.component';
import { ApiDataService} from '../api-data.service';


@Component({
  selector: 'app-carret-anonymous',
  templateUrl: './carret-anonymous.component.html',
  styleUrls: ['./carret-anonymous.component.css']
})
export class CarretAnonymousComponent implements OnInit {

  

public carret:any;
//precio;
public total=0;
public array:string[]=[];
public totalArray:any;


public payLoadData ={
  tarjeta:"",
  date:"",
  cvc:"",
  direccion:"",
  total: this.total
}

public dataPayLoad:any;
public pay:any;
public tarjeta=null;
public id;
public date = "";
public cvc =null;
public direccion ="";
public pais="";
public nombre;
public LIMIT_CARD;
public NUMBER_CARD;
public CVC_CARD;

  constructor(@Inject(DOCUMENT) private document: Document, private storageService: StorageService,
  public matDialog: MatDialog, public dialog: MatDialog, private _api: ApiDataService) { }

  ngOnInit() {

    this.carretF();

   



  }






 card;
 CVC;
 getPaysToCard(){
   this.storageService.get('currentUserKey').then( (res) => {
     this.data = res.data
     //console.log(this.data);
     this.card = this.data.LIMIT_CARD;
     //console.log(this.card)
    // this.getPays(this.card);
   });
 }


  
carretF(){

  this.carret =JSON.parse(localStorage.getItem('caret'));
  //console.log(this.carret.length);
  localStorage.setItem('clickcount', JSON.stringify(this.carret.length));
  var suma = 0;
  this.carret.forEach(function(numero){
    suma += numero.precio
  });
  //console.log(suma);
 
  console.log(this.total=suma);
  this.payload(this.total);

}

remove(id){
  //console.log(id);
  this.document.location.reload();
  const filtered = this.carret.filter(item => item.id !== id);
  localStorage.setItem('caret', JSON.stringify(filtered));  


  if (typeof(Storage) !== "undefined") {
    if (localStorage.clickcount ) {
      localStorage.clickcount = Number(localStorage.clickcount)-1;
    } 
    if (localStorage.clickcount >=0) {
      localStorage.clickcount = Number(localStorage.clickcount);
    } 
    else {
      localStorage.clickcount = 0;
    }
    document.getElementById("result").innerHTML = localStorage.clickcount ;
  } 


}



public user;
getUser(){
  return this._api.getUser().subscribe((data)=>{
    
    this.data= data;
    this.user= this.data.data;
    localStorage.setItem('userRecurrent', JSON.stringify(this.user));

  });
}

doPayLoad(pay){

  return this._api.doPayLoad(pay).subscribe((data)=>{
    //console.log(data);
  });
}



  compraExitosa() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
   
    const dialogRef = this.dialog.open(CompraExitosaComponent,{width: '600px'});
  }
  limiteCredito() {
    const dialogConfig = new MatDialogConfig();
  dialogConfig.disableClose = false;
  const dialogRef = this.dialog.open(LimiteCreditoComponent,{width: '600px'});
  }

public error;
public errorCvc;
public data:any;
public dataPay:any;


payload(total){
  const genRanHex = size => [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');
  var d = new Date();

  let carrret = JSON.parse(localStorage.getItem('caret'));

  this.dataPayLoad ={
    id: genRanHex(8),
    nombre: this.nombre,
    tarjeta:this.tarjeta,
    fecha:d.toLocaleDateString(),
    cvc:this.cvc,
    direccion: this.direccion,
    pais: this.pais,
    total: this.total,
    product: this.carret
  }

  this.pay={
    total: this.total,
    tarjeta:this.tarjeta
  }

  

  //console.log(this.LIMIT_CARD)


  console.log(carrret);


  console.log(this.dataPayLoad);
  console.log(JSON.stringify(this.dataPayLoad));


if(this.cvc==null){
console.log("cvc no puede ser nulo")
}else{
  this.dataPay = JSON.stringify(this.dataPayLoad);
  this._api.postAnonimousBuy(this.dataPayLoad).subscribe((data)=>{
    console.log(data);
    //this.doPayLoad(this.pay);
    //this.getUser();

    localStorage.removeItem('caret');
    localStorage.removeItem('clickcount');
    this.compraExitosa();

    
  });
}

  



 


      



}



}
