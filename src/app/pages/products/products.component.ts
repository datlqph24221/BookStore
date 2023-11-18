import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: any[] = []
  constructor(private route: ActivatedRoute, private productService: ProductService) {
    this.ngOnInit
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const categoryName = params['name'];
      this.productService.getAllProduct().subscribe((data: any) => {
        console.log(data);
        this.products = data.filter((item: any) => item.categories.name === categoryName);
        console.log(this.products);

      })
      console.log(categoryName);
    });
  }
  VND = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  });
}
