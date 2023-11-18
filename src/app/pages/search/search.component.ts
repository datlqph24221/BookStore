import { Component } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  products!: any[]
  constructor(
    private router: Router,
    private productService: ProductService,
    private route: ActivatedRoute) {
    this.ngOnInit
  }
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const searchQuery = params['q'];
      this.productService.searchProduct(searchQuery).subscribe((data: any) => {
        this.products = data
        console.log(this.products);

      })
      // In giá trị từ khóa 'q'
      // Tiếp tục xử lý với giá trị từ khóa 'q'
    });
  }
}
