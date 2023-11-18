import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-list-new-product',
  templateUrl: './list-new-product.component.html',
  styleUrls: ['./list-new-product.component.css']
})
export class ListNewProductComponent {
  @Input() data: any
}
