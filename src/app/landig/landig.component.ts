import { Component, Inject, OnInit } from '@angular/core';
import { ApiDataService } from '../api-data.service';
import {AuthService} from '../../services/auth.service';
import {StorageService } from '../../services/storage.service';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-landig',
  templateUrl: './landig.component.html',
  styleUrls: ['./landig.component.css']
})
export class LandigComponent implements OnInit {
  public allCategories:any;
  private data;
  public allProducts:any;
  searchText;
  subCategorias:any;
  public subcategoria= null;
  public idE=null;
  userData:[];
  arraySub:any;
  public subCategoria={subcategoria: ""}

  constructor(@Inject(DOCUMENT) private document: Document, private _api: ApiDataService,
  private authService: AuthService, private storageService:StorageService) { }

  getAllProducts(){
    return this._api.getProducts().subscribe((data)=>{
      console.log(data);
      this.data = data;
      this.allProducts =this.data.data;
      console.log(this.allProducts);
    });
  }



  ngOnInit() {

    this.getAllProducts();
    
    return this._api.getCategories().subscribe((data)=>{
  
      console.log(data);
      this.data = data;
      this.allCategories =this.data.data;
      console.log(this.allCategories);
    
    });
    
  }


  refresh(){
    this.document.location.reload();
   }

  getSubCategorias(){
    return this._api.getSubCategorias(this.idE).subscribe((data)=>{
    console.log(data);
    this.data = data;
    this.subCategorias= this.data.data
    });
  }

 






  getProduct(){
    this.arraySub ={
      subcategoria:this.subcategoria
    }

    console.log(this.arraySub)
    return this._api.searchProduct(this.subCategoria).subscribe((data)=>{
      console.log(data);
      this.data = data;
      this.allProducts =this.data.data;
      console.log(this.allProducts);
    });
   
   



  }


  async getCurrentUser(){
    this.authService.userData$.subscribe({
       next: (data)=>{ 
         this.data = data;
         this.userData = this.data.data[0];
         console.log(this.userData)
       }
    });
   }


   public caret:any;
   public array:string[]=[];
   public storedArray:string[]= JSON.parse(localStorage.getItem('caret'));

   public total:any;

  addToCart(id,precio,nombre,imagen){
    console.log('detalle');
    var d = new Date();
    this.caret={
      id: id,
      fecha: d.toLocaleDateString(),
      nombre: nombre,
      precio: precio,
      imagen: imagen
      
    }
  
    console.log(this.array.length)
    if(this.array.length==0){
      this.array.push(this.caret);
      localStorage.setItem('caret', JSON.stringify(this.array));
      this.document.location.reload();
    }
    
    if(this.storedArray.length>=1){
      this.storedArray.push(this.caret);
      localStorage.setItem('caret', JSON.stringify(this.storedArray));

    }



    if (typeof(Storage) !== "undefined") {
      if (localStorage.clickcount) {
        localStorage.clickcount = Number(localStorage.clickcount)+1;
      } else {
        localStorage.clickcount = 1;
      }
      document.getElementById("result").innerHTML = localStorage.clickcount ;
    } 
    





  }

  /* count(){
  
      if (typeof(Storage) !== "undefined") {
        if (localStorage.clickcount) {
          localStorage.clickcount = Number(localStorage.clickcount)+1;
        } else {
          localStorage.clickcount = 1;
        }
        document.getElementById("result").innerHTML = "You have clicked the button " + localStorage.clickcount + " time(s).";
      } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
      }
    
   }*/


   /*clickNoCounter() {
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

  }*/
 



}
