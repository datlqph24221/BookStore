import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-quantity-button',
  templateUrl: './quantity-button.component.html',
  styleUrls: ['./quantity-button.component.css']
})
export class QuantityButtonComponent {

  quantity: number = 1;

  increaseQuantity() {
    this.quantity++;
  }

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }
}
