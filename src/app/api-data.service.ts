

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiDataService {

  constructor( private http: HttpClient) { }

   host = 'http://localhost:2020';

  getProducts(){
    const _URL = this.host+'/api/getproducts';
    return this.http.get(_URL);
   }

   

   getUser(){
    const _URL = this.host+'/api/user';
    return this.http.get(_URL)
  }

   register(data){
    const _URL = this.host+'/api/register';
    return this.http.post(_URL,data)
  }


   subirFoto(data){
    const _URL = this.host+'/api/subir';
    return this.http.post(_URL,data)
   }

  getcountry(){
    const _URL = this.host+'/api/getcountry';
    return this.http.get(_URL);
  }

  
  postCategories(data){
    const _URL = this.host+'/api/postcategory';
    return this.http.post(_URL,data);
  }
   getCategories(){
    const _URL = this.host+'/api/getcategorias';
    return this.http.get(_URL);
   }

   postSubCategories(data){
     const _URL = this.host+'/api/postsubcategory';
     return this.http.post(_URL,data)
   };
   getSubCategorias(id){
     const _URL = this.host+'/api/subcategoria/'+id;
     return this.http.get(_URL);
   }

   postProducts(data){
    const _URL = this.host+'/api/postproduct';
    return this.http.post(_URL,data);
   }


   searchProduct(data){
    const _URL = this.host+'/api/search';
    return this.http.post(_URL, data);
   }


  getBGs(){
    const _URL = this.host+'/api/bg';
    return this.http.get(_URL);
  }





postTransac(data){
  const _URL = this.host+'/api/postransac';
  return this.http.post(_URL, data);
}

getTransac(){
  const _URL = this.host+'/api/getransac';
  return this.http.get(_URL);
}


getPaysToCard(id){
  const _URL = this.host+'/api/getpaysbytarget/'+id;
  return this.http.get(_URL);
}


getPaysToCardDetail(data){
  const _URL = this.host+'/api/getransac';
  return this.http.post(_URL, data);
}




deletePay(id){
  const _URL = this.host+'/api/delete/'+id;
  return this.http.delete(_URL);
}






   doPayLoad(data){
    const _URL = this.host+'/api/updatefrompayload';
    return this.http.post(_URL, data);
   }

   getMoreSaldo(data){
    const _URL = this.host+'/api/updatesaldo';
    return this.http.post(_URL, data);
   }


  getJson(){
    const _URL = this.host+'/api/fromoracle';
    return this.http.get(_URL);
  }

 



//======for anonimous buyers =================//

postAnonimousBuy(data){
  const _URL = this.host+'/api/posanonimousbuy';
  return this.http.post(_URL, data);
}



}
