import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core'

const {Storage} = Plugins;

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }


  async store(storageKey: string, value:any){
    const encryptedValue = btoa(escape(JSON.stringify(value)));
    await Storage.set({
      key: storageKey,
      value: encryptedValue
    });
  }




  async get(storageKey: string){
    const response = await Storage.get({key: storageKey});
    if(response.value){ 
      return JSON.parse(unescape(atob(response.value)));
    }else{ 
      return false;
    }
  }


async removeItem(storageKey: string){
  await Storage.remove({key: storageKey});
}


async clear(){
  await Storage.clear();
}




}
