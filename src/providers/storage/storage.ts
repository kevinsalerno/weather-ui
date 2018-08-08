import { Injectable } from '@angular/core';

/*
  StorageProvider for Local Storage caching
*/
@Injectable()
export class StorageProvider {

  constructor() {
  }

  set(key: string, value: any) {
    console.log('setting storage!');
    console.log(key);
    window.localStorage[key] = value;
  }

  get(key: string) {
    // null check
    if (window.localStorage[key]) {
      return window.localStorage[key];
    }
    return null;
  }

}
