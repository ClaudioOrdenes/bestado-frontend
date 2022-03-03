import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Global } from './global';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FondoService {
  public url:string;

  constructor(
    private _http:HttpClient,
    
  ) { 
    this.url =Global.url;
  }
  getfondos():Observable<any>{
    let headers =new HttpHeaders().set('Content-Type','application/json');
    return this._http.get(this.url + 'get',{headers : headers});
  }
}
