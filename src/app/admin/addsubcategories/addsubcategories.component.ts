import { Component, Inject, OnInit } from '@angular/core';
import { ApiDataService} from '../../api-data.service';
import { Router } from '@angular/router';
import {MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AlertsComponent } from 'src/app/alerts/alerts.component';
import { SuccessComponent } from 'src/app/alerts/success/success.component';




@Component({
  selector: 'app-addsubcategories',
  templateUrl: './addsubcategories.component.html',
  styleUrls: ['./addsubcategories.component.css']
})
export class AddsubcategoriesComponent implements OnInit {
 
  data:any;
  allCategories:any;

  constructor(
    private _api:ApiDataService, 
    private router: Router,
    public matDialog: MatDialog, 
    public dialog: MatDialog 
    ) { }

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
    const dialogRef = this.dialog.open(AlertsComponent,{width: '600px'});
  }

  successAdd() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    const dialogRef = this.dialog.open(SuccessComponent,{width: '600px'});
  }



  public error:any;
  public alert:any;
  public message:any;




 randomString(length, chars) {
    var mask = '';
    if (chars.indexOf('a') > -1) mask += 'abcdefghijklmnopqrstuvwxyz';
    if (chars.indexOf('A') > -1) mask += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (chars.indexOf('#') > -1) mask += '0123456789';
    if (chars.indexOf('!') > -1) mask += '~`!@#$%^&*()_+-={}[]:";\'<>?,./|\\';
    var result = '';
    for (var i = length; i > 0; --i) result += mask[Math.round(Math.random() * (mask.length - 1))];
    return result;
}

//document.write(randomString(16, 'aA'));




  addSubCategory(){

    const genRanHex = size => [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');

    this.array ={
      id: genRanHex(32),
      name: this.subCategoryName,
      idc:this.idCat
    }
    console.log(this.array);
    return this._api.postSubCategories(this.array).subscribe((data)=>{
      console.log(data);
      this.successAdd();
    },
    (error)=>{ 
      this.data= error;
      this.error= this.data.error
      this.alert = this.error.data
      console.log(this.alert);
      if(this.alert){
        this.openDialog();
      }
    });




  }


public idCat=null;
public subCategoryID=null;
public subCategoryName:null;
private array:any;

getIdCategories(){
 this.array ={
    ID_SUBCATEGORIA: this.subCategoryID,
    NAME_SUBCATEGORIA: this.subCategoryName,
    CATID:this.idCat

  }
  console.log(this.array);

}






}



