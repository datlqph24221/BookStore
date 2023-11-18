import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-hot-product',
  templateUrl: './list-hot-product.component.html',
  styleUrls: ['./list-hot-product.component.css']
})
export class ListHotProductComponent {
  @Input() data: any
}
