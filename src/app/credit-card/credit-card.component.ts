import { Component, Inject, OnInit } from '@angular/core';
import { ApiDataService} from '../api-data.service';
import { DOCUMENT } from '@angular/common';
import {MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { SaldoComponent } from 'src/app/alerts/saldo/saldo.component';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.css']
})
export class CreditCardComponent implements OnInit {

  constructor(private _api: ApiDataService, @Inject(DOCUMENT)  private document: Document,
  public matDialog: MatDialog, public dialog: MatDialog) {}

  ngOnInit(): void {
  }
data;
user;
public moreSaldo ={
  
  tarjeta:'',
  cvc:'',
  total: ''

}


saldoAcreditado() {
  const dialogConfig = new MatDialogConfig();
  dialogConfig.disableClose = false;
  const dialogRef = this.dialog.open(SaldoComponent,{width: '600px'});
}


  agregarSaldo(){
    console.log("saldo");
    console.log(this.moreSaldo);
    return this._api.getMoreSaldo(this.moreSaldo).subscribe((data)=>{
      console.log(data);
      this.getUser();
      //this.document.location.reload();
      this.saldoAcreditado();
    });

    
  
  }

  getUser(){
    return this._api.getUser().subscribe((data)=>{
      
      this.data= data;
      this.user= this.data.data;
      console.log(this.user);
      console.log(JSON.stringify(this.user));
      localStorage.setItem('userRecurrent', JSON.stringify(this.user));

    });
  }
      
     


}
