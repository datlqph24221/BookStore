import { Component } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  products: any[] = [];
  reversedProducts: any[] = [];
  topSoldProducts: any[] = [];
  topMonth: any[] = []
  constructor(private productSevice: ProductService) {
    this.productSevice.getAllProduct().subscribe(data => {
      this.products = data;
      this.topMonth = this.products.sort((a, b) => b.rating_average.totalRating - a.rating_average.totalRating).slice(0, 10)
      this.reversedProducts = this.products.slice(-10).reverse();
      this.topSoldProducts = this.products.sort((a, b) => b.quantity_sold.value - a.quantity_sold.value).slice(0, 12);
    }, error => console.log(error))
  }

}
