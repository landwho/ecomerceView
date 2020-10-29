import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

  constructor(private router: Router, public dialogRef: MatDialogRef<SuccessComponent>) { }

  ngOnInit(): void {
  }

  okk(){
    this.router.navigate(['./landing']);
    this.dialogRef.close();
  }

}
