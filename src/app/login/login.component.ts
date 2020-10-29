import { Component, Inject, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {StorageService } from '../../services/storage.service';
import { AuthConstants } from 'src/models/auth-constants';
import { DOCUMENT } from '@angular/common';
import { ApiDataService} from '../api-data.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



public userData ={
  email: "",
  pass: ""
}
  flag:false;
  flagOn:true;

  constructor(@Inject(DOCUMENT) private document: Document, 
  private http: AuthService, private storageService: StorageService,private _api: ApiDataService) { }

  ngOnInit() {
    this.flag;
    this.flagOn
  }


login(){
  console.log(this.userData);
  return this.http.login(this.userData).subscribe((data)=>{
    this.storageService.store(AuthConstants.AUTH, data);
    this.getUser();
    this.document.location.reload();

    console.log(data)
  },(error)=>{
    console.log(error)
  });


};


data;
user;

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
