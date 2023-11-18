import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(private http: HttpClient) { }
  addToReview(data: any) {
    return this.http.post(`http://localhost:3000/reviews/`, data)
  }
  getReviewByIdProduct(id: any) {
    return this.http.get(`http://localhost:3000/reviews?productId=${id}`,)
  }
}
