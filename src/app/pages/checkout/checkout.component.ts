import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ShoppingCart } from 'src/app/interface/cart';
import { CartService } from 'src/app/service/cart.service';
import { OrderService } from 'src/app/service/order.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  user!: any;
  cart!: any;
  today = new Date()
  id = localStorage.getItem('id');
  validateForm = this.fb.group({
    userId: ['', [Validators.required]],
    email: ['', [Validators.email, Validators.required]],
    firstname: ['', [Validators.required]],
    lastname: ['', [Validators.required]],
    phoneNumber: ['', [Validators.required]],
    address: ['', [Validators.required]],
    note: [''],
    date: [this.formatDate(this.today), [Validators.required]],
    paymentMethod: ['Direct Payment', [Validators.required]],
    orderProduct: [],
    orderPrice: [0, [Validators.required]],
    orderState: ['Đang xử lý', [Validators.required]]
  });
  constructor(private fb: FormBuilder,
    private userSevice: UserService,
    private message: NzMessageService,
    private router: Router,
    private cartService: CartService,
    private orderService: OrderService) {
    this.userSevice.getOne(this.id).subscribe(data => {
      this.user = data;
      this.initializeForm();
    })
    if (this.id) {
      this.cartService.getById(this.id).subscribe((data: any) => {
        [this.cart] = data
        // console.log(this.cart);
        this.validateForm.patchValue({
          orderProduct: this.cart.items,
          orderPrice: this.cart.totalPrice,
          userId: this.cart.userId,
        });

      })
    }
  }
  formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    return `${year}-${month}-${day}`;
  }
  initializeForm(): void {
    this.validateForm.patchValue({
      email: this.user?.email,
      firstname: this.user?.firstname,
      lastname: this.user?.lastname,
      phoneNumber: this.user?.phoneNumber,
      address: this.user?.address,
    })
  }
  submitForm() {
    // console.log(this.validateForm.value);
    if (this.validateForm.value) {
      this.orderService.addToOrder(this.validateForm.value).subscribe(() => {
        this.cartService.getById(this.id).subscribe((data: any) => {
          const [order] = data
          const shoppingCart: ShoppingCart = {
            id: order?.id,
            userId: order?.userId,
            items: [],
            totalPrice: 0,
          };
          this.cartService.addProduct(shoppingCart, this.cart?.id).subscribe(() => {
            this.message.info('Đặt hàng thành công');
            this.router.navigate(['/']);
          })
        })



      })
    }

  }
  isVisible = false;


  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

}
