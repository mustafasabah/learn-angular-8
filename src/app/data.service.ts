import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  getUsers() {
    return this.http.get('https:/reqres.in/api/users');
    //  console.log(5555555);
    // return h1style = true;
    // return (h1style) ? h1style = false : h1style = true;
  }
}
