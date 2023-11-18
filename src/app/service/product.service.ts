import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getAllProduct(): Observable<any[]> {
    return this.http.get<any[]>(`http://localhost:3000/products`)
  }
  getOneProduct(id: any): Observable<any[]> {
    return this.http.get<any[]>(`http://localhost:3000/products/${id}`)
  }
  searchProduct(keyword: any): Observable<any[]> {
    return this.http.get<any[]>(`http://localhost:3000/products?q=${keyword}`)
  }
  updateProduct(id: any, data: any) {
    return this.http.put(`http://localhost:3000/products/${id}`, data)
  }
}
