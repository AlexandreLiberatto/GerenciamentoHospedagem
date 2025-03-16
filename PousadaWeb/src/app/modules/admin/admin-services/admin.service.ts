import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserStorageService } from '../../../auth/services/storage/user-storage.service';

//======== AQUI URL DA API ===============
const BASIC_URL = "http://localhost:8080/";

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  postRoomDetails(rommDto:any): Observable<any>{
    return this.http.post(BASIC_URL + "api/admin/room", rommDto,{
      headers: this.createAuthorizationHeader(),
    })
  }

  getRooms(pageNumber:number): Observable<any>{
    return this.http.get(BASIC_URL + `api/admin/rooms/${pageNumber}`,{
      headers: this.createAuthorizationHeader(),
    })
  }

  getRoomById(id:number): Observable<any>{
    return this.http.get(BASIC_URL + `api/admin/room/${id}`, {
      headers: this.createAuthorizationHeader()
    });
  }

  createAuthorizationHeader(){
    let authHeaders: HttpHeaders = new HttpHeaders();
    return authHeaders.set(
      'Authorization',
      'Bearer ' + UserStorageService.getToken()
    )
  }
}

