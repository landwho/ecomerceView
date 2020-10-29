import { Component, OnInit } from '@angular/core';
import { ApiDataService} from '../../api-data.service'
import { Router } from '@angular/router';
import {MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AlertsComponent } from 'src/app/alerts/alerts.component';
import { SuccessComponent } from 'src/app/alerts/success/success.component';


@Component({
  selector: 'app-addcategories',
  templateUrl: './addcategories.component.html',
  styleUrls: ['./addcategories.component.css']
})
export class AddcategoriesComponent implements OnInit {
/* ng models */
  id:number;
  name: string;
  subCategory:string;
  data:any;
  success:any;


  constructor(
    private _api:ApiDataService, 
    private router: Router,
    public matDialog: MatDialog, 
    public dialog: MatDialog
    ) { }

  ngOnInit() {}



  public error:any;
  public alert:any;
  public message:any;
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

 

 addCategory(){

   this.data={
    id: this.id,
    name: this.name
   }

      return this._api.postCategories(this.data).subscribe((data)=>{
        
        this.data = data;
        this.success = this.data.status;
        if(this.success==200){
          this.successAdd() ;
         // this.router.navigate(['./addsubcategories']);
        }

      },(error)=>{ 
        this.data= error;
        this.error= this.data.error
        this.alert = this.error.data
        console.log(this.alert);
  
        if(this.alert){
          this.openDialog();
        }

      }); 


 }








}
