import { Component, OnInit } from '@angular/core';
import { ApiDataService} from '../api-data.service';
import { Router } from '@angular/router';


import {MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { RegisterSuccessComponent } from 'src/app/alerts/register-success/register-success.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

public limiteCredito= 2000;
private data;
countries:any;
public countryName='';

  public userData ={
    nombre: '',
    apellido: '',
    email: '',
    password:'',
    notarjeta: '',
    fechaexp:'',
    cvc:'',
    postal: '',
    country: this.countryName,
    limitecredito:this.limiteCredito

  }

  constructor( private _api:ApiDataService,private router: Router, public matDialog: MatDialog, public dialog: MatDialog ) { }

  ngOnInit() {





    return this._api.getcountry().subscribe((data)=>{
      this.data = data;
      this.countries = this.data.data;
      console.log(this.countries);
    });

  }


  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    const dialogRef = this.dialog.open(RegisterSuccessComponent,{width: '600px'});
  }


register(){
  console.log(this.userData);


return this._api.register(this.userData).subscribe((data)=>{
console.log(data);
this.openDialog();
},(error)=>{ console.log(error)});



}







}
