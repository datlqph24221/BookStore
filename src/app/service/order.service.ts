import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }
  getOrderByUserId(id: any) {
    return this.http.get(`http://localhost:3000/orders?userId=${id}`)
  }
  addToOrder(data: any) {
    return this.http.post(`http://localhost:3000/orders/`, data)
  }
  getOneOrder(id: any) {
    return this.http.get(`http://localhost:3000/orders/${id}`)
  }
  updateOrder(id: any, data: any) {
    return this.http.put(`http://localhost:3000/orders/${id}`, data)
  }
  getFinishedOrder(id: any) {
    return this.http.get(`http://localhost:3000/orders?orderState=Ho%C3%A0n%20th%C3%A0nh&&userId=${id}`)
  }
}
