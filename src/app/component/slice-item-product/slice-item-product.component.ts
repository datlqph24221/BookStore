import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-slice-item-product',
  templateUrl: './slice-item-product.component.html',
  styleUrls: ['./slice-item-product.component.css']
})

export class SliceItemProductComponent {
  @Input() listProduct: any;

  slideConfig = {
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: "false",
    draggable: false,
    "autoplay": true,
    "autoplaySpeed": 3000,
  };


}
