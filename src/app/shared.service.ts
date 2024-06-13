import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { product } from './product/productmodal';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private baseUrl: string = 'http://localhost:5200/api/users';
  private apiUrl = 'http://localhost:5281/api/products';

  constructor(private httpClient: HttpClient,private http:HttpClient) {}

  getProduct(): Observable<product[]> {
    return this.httpClient.get<product[]>(this.apiUrl);
  }

  getProductById(id: number): Observable<product> {
    return this.httpClient.get<product>(`${this.apiUrl}/${id}`);
  }
  signup(userObj:any){
    return this.http.post<any>('${this.baseurl}register',userObj)
  }
  login(loginObj:any){
    return this.http.post<any>('${this.baseUrl}authenticate',loginObj)

  }

}
