import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-no-compra',
  templateUrl: './no-compra.component.html',
  styleUrls: ['./no-compra.component.css']
})
export class NoCompraComponent implements OnInit {

  constructor(private router: Router, public dialogRef: MatDialogRef<NoCompraComponent>,
    @Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
  }

  async okk(){
   // this.router.navigate(['./landing']);
    this.dialogRef.close();
    this.document.location.reload(await this.router.navigate(['./landing']));


    
  }


}
