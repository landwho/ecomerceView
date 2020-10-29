import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef, 
  MatDialogTitle} 
  from '@angular/material/dialog';
@Component({
  selector: 'app-register-success',
  templateUrl: './register-success.component.html',
  styleUrls: ['./register-success.component.css']
})
export class RegisterSuccessComponent implements OnInit {


  constructor(private router: Router, public dialogRef: MatDialogRef<RegisterSuccessComponent>,
   ) { }

  ngOnInit(): void {
  }



  ok(){
    this.router.navigate(['./landing']);
    this.dialogRef.close();
  }

}
