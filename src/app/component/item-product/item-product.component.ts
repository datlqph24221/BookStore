import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-item-product',
  templateUrl: './item-product.component.html',
  styleUrls: ['./item-product.component.css'],
})
export class ItemProductComponent {
  @Input() product: any;
  @Input() index: any;
  VND = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  });
}
