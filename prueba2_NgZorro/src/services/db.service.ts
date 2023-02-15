import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseModel } from 'src/models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class DbService {

private url = "https://api.github.com/search/users"

constructor(
  private http: HttpClient
) { }

getUsers(key: string): Observable<ResponseModel> {
  const params = new HttpParams().set('q', key)
 return this.http.get<ResponseModel>(this.url, {params: params})
}

}
