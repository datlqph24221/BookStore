import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NzMessageService } from 'ng-zorro-antd/message';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cart!: any;
  quantity!: number;
  constructor(
    private cartService: CartService,
    private message: NzMessageService) {
    const idUser = localStorage.getItem('id');
    if (idUser) {
      cartService.getById(idUser).subscribe((data: any) => {
        [this.cart] = data
        console.log(this.cart);

      })
    }
  }
  VND = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  });
  increaseQuantity(item: any) {
    item.quantity++;
    this.cart.totalPrice = this.cart.totalPrice + item.price
    this.cartService.addProduct(this.cart, this.cart.id).subscribe(data => {
      this.message.loading("Thay đổi số lượng thành công")
    })
  }

  decreaseQuantity(item: any) {
    if (item.quantity > 1) {
      item.quantity--;
      this.cart.totalPrice = this.cart.totalPrice - item.price
      this.cartService.addProduct(this.cart, this.cart.id).subscribe(data => {
        this.message.loading("Thay đổi số lượng thành công")
      })
    }
  }
  removeFromCart(productId: any, price: any): void {
    const updatedItems = this.cart.items.filter((item: any) => item.id !== productId);
    this.cart.items = updatedItems;
    this.cart.totalPrice = this.cart.totalPrice - price
    console.log(this.cart);
    this.cartService.addProduct(this.cart, this.cart.id).subscribe(data => {
      this.message.loading("Xóa sản phẩm thành công")
    })

  }
  currentPage = 1;
  itemsPerPage = 4;

  get totalItems(): number {
    return this.cart.items.length;
  }

  get currentReviews(): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.cart.items.slice(startIndex, endIndex);
  }

  changePage(page: number): void {
    this.currentPage = page;
  }
}
