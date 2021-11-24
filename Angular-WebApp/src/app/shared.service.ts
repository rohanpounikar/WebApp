import { Injectable } from '@angular/core';

import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly APIUrl='http://localhost:5001/api/Users/'

  constructor(private http:HttpClient) { }

  getUser():Observable<any>{
    return this.http.get<any>(this.APIUrl);
  }

  postUser(val:any){
    
    return this.http.post(this.APIUrl,val);
  }

  updateUser(val:any){
    return this.http.put(this.APIUrl,val);
  }


}
 