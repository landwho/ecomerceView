import { Component, OnInit } from '@angular/core';
import { ApiDataService } from '../api-data.service';


@Component({
  selector: 'app-json',
  templateUrl: './json.component.html',
  styleUrls: ['./json.component.css']
})
export class JsonComponent implements OnInit {



  public allPersons:any;
  private data;


  constructor( private _api: ApiDataService) { }




  ngOnInit(){





return this._api.getJson().subscribe((data)=>{
  
  console.log(data);
  this.data = data;
  this.allPersons =this.data.data;
  console.log(this.allPersons);

});


   



  }







}
