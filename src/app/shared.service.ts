import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { product } from './product/productmodal';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private apiUrl = 'http://localhost:5281/api/products';

  constructor(private httpClient: HttpClient,private http:HttpClient) {}

  getProduct(): Observable<product[]> {
    return this.httpClient.get<product[]>(this.apiUrl);
  }

  getProductById(productId: number): Observable<product> {
    const url = `${this.apiUrl}/${productId}`;
    return this.http.get<product>(url);
  }
}
