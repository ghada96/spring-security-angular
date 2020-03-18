import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestapiService {

    headers = new HttpHeaders()
        .set('Access-Control-Allow-Origin', '*')
        .set('Access-Control-Allow-Methods', '*')
        .set('Access-Control-Allow-Headers', '*');


  constructor(private http:HttpClient) { }

login(username:string,password:string){
        //this.headers.set('Authorization',  `Basic ${btoa(username + ':' + password)}`)
 
  return this.http.get('http://localhost:8080/rest/auth/',{headers:this.headers ,responseType:'text' as 'json'})
}

}
