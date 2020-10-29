import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compra-exitosa',
  templateUrl: './compra-exitosa.component.html',
  styleUrls: ['./compra-exitosa.component.css']
})
export class CompraExitosaComponent implements OnInit {

  constructor(private router: Router, public dialogRef: MatDialogRef<CompraExitosaComponent>,@Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
  }

  async okk(){
   // this.router.navigate(['./landing']);
    this.dialogRef.close();
    this.document.location.reload(await this.router.navigate(['./landing']));


    
  }

}
