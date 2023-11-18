import { Component } from '@angular/core';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})
export class SlideComponent {
  slides = [
    'https://307a0e78.vws.vegacdn.vn/view/v2/image/img.banner/0/0/0/2824_new.jpg?v=1&w=1580&h=400',
    'https://307a0e78.vws.vegacdn.vn/view/v2/image/img.banner/0/0/0/2749_new.jpg?v=1&w=1580&h=400',
    'https://307a0e78.vws.vegacdn.vn/view/v2/image/img.banner/0/0/0/2818_new.jpg?v=1&w=1580&h=400',
  ]
  slideConfig = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "autoplay": true,
    "autoplaySpeed": 2000,
  };
}
