import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }
  getById(id: any) {
    return this.http.get(`http://localhost:3000/carts?userId=${id}`)
  }
  createCartandAddProduct(data: any) {
    return this.http.post(`http://localhost:3000/carts`, data)
  }
  addProduct(data: any, id: any) {
    return this.http.put(`http://localhost:3000/carts/${id}`, data)
  }


}
