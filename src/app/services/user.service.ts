import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  private API_ENDPOINT = 'https://667334e36ca902ae11b376d1.mockapi.io/';
  private PLATZI_ENDPOST = 'https://api.escuelajs.co/api/v1/';

  registerUser(dataSent:object):Observable<any>{
    return this.http.post<any>(this.API_ENDPOINT+"usuarios", dataSent);
  }
  authUser(dataSent:Object):Observable<any>{
    return this.http.post<any>(this.PLATZI_ENDPOST+"auth/login",dataSent);
  }
}
