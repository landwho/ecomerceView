import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import {StorageService } from '../../services/storage.service';
import {MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CompraExitosaComponent } from 'src/app/alerts/compra-exitosa/compra-exitosa.component';
import { LimiteCreditoComponent } from 'src/app/alerts/limite-credito/limite-credito.component';
import { ApiDataService} from '../api-data.service';

@Component({
  selector: 'app-carret',
  templateUrl: './carret.component.html',
  styleUrls: ['./carret.component.css']
})
export class CarretComponent implements OnInit {


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
public nombre;
public LIMIT_CARD;
public NUMBER_CARD;
public CVC_CARD;
public pais="";

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
     this.card = this.data.LIMIT_CARD;
     //console.log(this.card)
    // this.getPays(this.card);
   });
 }


  
carretF(){

  this.carret =JSON.parse(localStorage.getItem('caret'));
  console.log(this.carret.length);
  localStorage.setItem('clickcount', JSON.stringify(this.carret.length));
  var suma = 0;
  this.carret.forEach(function(numero){
    suma += numero.precio
  });
  console.log(suma);
 
  console.log(this.total=suma);
  this.payload(this.total);

}

remove(id){
  console.log(id);
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
    console.log(this.user);
    console.log(JSON.stringify(this.user));
    localStorage.setItem('userRecurrent', JSON.stringify(this.user));

  });
}

doPayLoad(pay){

  return this._api.doPayLoad(pay).subscribe((data)=>{
    console.log(data);
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
    direccion:this.direccion,
    total: this.total,
    product: this.carret
  }

  this.pay={
    total: this.total,
    tarjeta:this.tarjeta
  }

  this.LIMIT_CARD =localStorage.getItem('LIMIT_CARD');

  console.log(this.LIMIT_CARD)


  //console.log(carrret);


  //console.log(this.dataPayLoad);
 // console.log(JSON.stringify(this.dataPayLoad));


 //get the current user 
  this.storageService.get('currentUserKey').then( (res) => {
    this.data = res.data
    console.log(this.data);
    this.card = this.data.NUMBER_CARD;
    this.CVC = this.data.CVC_CARD;
    console.log(this.card)
    console.log(this.CVC)
    


//validaciones antes de realizar compra

  if(this.total > this.LIMIT_CARD){
      this.limiteCredito();
    }else{

    if(this.card!= this.tarjeta){
      console.log("ingresa un numero de tarjeta");
      this.error = "tarjeta invalida";
    }else{

    if(this.CVC!= this.cvc){
      this.error = "";
      this.errorCvc = "codigo de seguridad invalido"
      console.log("cvc malo")
      
      }else{

      if(this.total == 0){
        console.log("no hay nada que comprar")
      }else{
          this.dataPay = JSON.stringify(this.dataPayLoad);
          this._api.postTransac(this.dataPayLoad).subscribe((data)=>{
            console.log(data);
            this.doPayLoad(this.pay);
            this.getUser();

            localStorage.removeItem('caret');
            localStorage.removeItem('clickcount');
            this.compraExitosa();
          });
          console.log("Compra exitosa")
        }
      }
    }
  }








  });



 


      



}




}
