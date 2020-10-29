import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
@Component({
  selector: 'app-limite-credito',
  templateUrl: './limite-credito.component.html',
  styleUrls: ['./limite-credito.component.css']
})
export class LimiteCreditoComponent implements OnInit {

  constructor(private router: Router, public dialogRef: MatDialogRef<LimiteCreditoComponent>) { }

  ngOnInit(): void {
  }

  okk(){
    //this.router.navigate(['./landing']);
    this.dialogRef.close();
  }

}
