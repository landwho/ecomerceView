import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { SuccessComponent } from 'src/app/alerts/success/success.component';
import { ApiDataService} from '../../api-data.service';




@Component({
  selector: 'app-addproducts',
  templateUrl: './addproducts.component.html',
  styleUrls: ['./addproducts.component.css']
})
export class AddproductsComponent implements OnInit {


data:any;
allCategories:any;
/*  ngModels */
name:any;
id:any;
description:any;
price:any;
image:any;
public subcategoria='';
public categoria=null;
subCategorias:any;
//public subCategoria= null;
private dir ='../../../assets/catalogo';
public idE='';
public idS=null;

product:any;
 genRanHex = size => [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');

public productData ={
  name:'',
  id: this.genRanHex(32),
  description:'',
  price:'',
  cantidad:'',
  image: '',
  categoria: this.categoria,
  subcategoria: this.subcategoria
}

  constructor(private _api: ApiDataService,public matDialog: MatDialog, 
    public dialog: MatDialog) { }

  ngOnInit() {


    return this._api.getCategories().subscribe((data)=>{
  
      console.log(data);
      this.data = data;
      this.allCategories =this.data.data;
      console.log(this.allCategories);
    
    });
    

  }


  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    const dialogRef = this.dialog.open(SuccessComponent,{width: '600px'});
  }





  getSubCategorias(){
  
    return this._api.getSubCategorias(this.productData.categoria).subscribe((data)=>{
    console.log(data);
    this.data = data;
    this.subCategorias= this.data.data

    });

}

public error:any;
public alert:any;

addProduct(){



//console.log(this.product)
console.log(this.productData)

return this._api.postProducts(this.productData).subscribe((data)=>{
  console.log(data);
  this.openDialog();

},
(error)=>{ 
  this.data= error;
  this.error= this.data.error
  this.alert = this.error.data
 

  if(this.alert){
    this.openDialog();
  }


}); 

/*let formData = new FormData();
for(let i =0; i<this.uploadFiles.length;i++){
  formData.append("uploads[]", this.uploadFiles[i], this.uploadFiles[i].name);
}

return this._api.subirFoto(formData).subscribe((data)=>{
  console.log(data);
})*/



};

uploadFiles: Array<File>;

onFileChange(e){
 console.log(e);
 this.uploadFiles =e.target.files;
 console.log(this.uploadFiles);
}






}
