import { Component, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';
import { CurrencyPipe } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
import { QuantityButtonComponent } from '../../component/quantity-button/quantity-button.component';
import { CartService } from 'src/app/service/cart.service';
import { CartItem, ShoppingCart } from 'src/app/interface/cart';
import { NzMessageService } from 'ng-zorro-antd/message';
import { UserService } from 'src/app/service/user.service';
import { Review } from 'src/app/interface/review';
import { ReviewService } from 'src/app/service/review.service';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  product!: any;
  cartUser!: boolean;
  cart!: any;
  quantity: number = 1;
  user!: any
  reviews!: any[]
  comment!: boolean
  constructor(
    private productSevice: ProductService,
    private router: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private cartService: CartService,
    private message: NzMessageService,
    private reviewService: ReviewService,
    private userService: UserService,
    private orderService: OrderService,
    private cdr: ChangeDetectorRef
  ) {
    const userId = localStorage.getItem('id')
    this.router.paramMap.subscribe(param => {
      const id = param.get('id');
      this.productSevice.getOneProduct(id).subscribe(product => {
        this.product = product;
      })
      this.cartService.getById(localStorage.getItem('id')).subscribe((data: any) => {
        if (data.length !== 0) {
          this.cartUser = true;
          [this.cart] = data;

        }
        else this.cartUser = false
      })
      this.reviewService.getReviewByIdProduct(id).subscribe((data: any) => {
        if (data.length !== 0) {
          this.reviews = data
        }
      })
      this.orderService.getFinishedOrder(userId).subscribe((data: any) => {
        const uniqueProductIds = new Set<number>();

        // Duyệt qua từng đơn đặt hàng và sản phẩm
        data.forEach((order: any) => {
          order.orderProduct.forEach((product: any) => {
            uniqueProductIds.add(product.id);
          });
        });

        // Chuyển đổi Set thành mảng nếu cần
        const allUniqueProductIds = Array.from(uniqueProductIds);
        this.comment = allUniqueProductIds.includes(Number(id));
      })
    })

    if (userId) {
      userService.getOne(userId).subscribe((data: any) => {
        this.user = data
      })
    }
  }
  loadReviews(productId: any): void {
    this.reviewService.getReviewByIdProduct(productId).subscribe((data: any) => {
      if (data.length !== 0) {
        this.reviews = data;
        this.cdr.detectChanges();
      }
    });
  }
  bypassSanitization(html: string): any {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
  VND = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  });
  increaseQuantity() {
    this.quantity++;
    console.log(this.quantity);

  }

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
      console.log(this.quantity);

    }
  }
  addToCart(productItem: any): void {
    const id: any = localStorage.getItem('id')
    const accessToken: any = localStorage.getItem('accessToken')
    if (id && accessToken) {
      if (this.cartUser) {
        const existingItemIndex = this.cart.items.findIndex((item: any) => item.id === this.product.id);
        console.log(existingItemIndex);
        if (existingItemIndex !== -1) {
          this.cart.items[existingItemIndex].quantity += this.quantity;
          this.cart.totalPrice += productItem.sale_price * this.quantity
          console.log(this.cart);
          this.cartService.addProduct(this.cart, this.cart?.id).subscribe((data) => {
            this.message.info('Thêm vào giỏ hàng thành công')
            this.cdr.detectChanges();
          })
        } else {
          // Nếu sản phẩm chưa tồn tại trong giỏ hàng, thêm mới
          const cartItem: CartItem = {
            id: this.product?.id,
            image: this.product?.images[0].small_url,
            authors: this.product?.authors[0].name,
            nameProduct: this.product?.name,
            price: this.product?.sale_price,
            quantity: this.quantity
          };
          const shoppingCart: ShoppingCart = {
            id: this.cart?.id,
            userId: id,
            items: [...this.cart?.items, cartItem],
            totalPrice: cartItem.price * cartItem.quantity + this.cart?.totalPrice,
          };
          this.cartService.addProduct(shoppingCart, this.cart?.id).subscribe((data) => {
            this.message.info('Thêm vào giỏ hàng thành công')
            this.cdr.detectChanges();
          })
        }

      }
      else {
        const cartItem: CartItem = {
          id: this.product?.id,
          image: this.product?.images[0].small_url,
          authors: this.product?.authors[0].name,
          nameProduct: this.product?.name,
          price: this.product?.sale_price,
          quantity: this.quantity
        };
        const shoppingCart: ShoppingCart = {
          userId: id,
          items: [cartItem],
          totalPrice: cartItem.price * cartItem.quantity,
        };
        this.cartService.createCartandAddProduct(shoppingCart).subscribe(() => {
          this.message.info('Thêm vào giỏ hàng thành công')
        })
      }
    }
    else {
      this.message.info('Bạn chưa đăng nhập!')
    }
  }

  inputValue = '';
  submitting = false;
  rating: any
  today = new Date()
  formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    return `${year}-${month}-${day}`;
  }
  handleSubmit(id: any, user: any, product: any): void {

    if (this.rating) {
      this.submitting = true;
      const review = {
        productId: id,
        userId: user.id,
        userName: user.lastname + ' ' + user.firstname,
        rating: this.rating,
        comment: this.inputValue,
        createdAt: this.formatDate(this.today),
      }
      setTimeout(() => {
        this.reviewService.addToReview(review).subscribe(() => {
          this.message.info('Đánh giá thành công')
          const newProduct = {
            ...product,
            rating_average: {
              value: (this.rating + product.rating_average.totalRating) / (product.rating_average.quantityVote + 1),
              totalRating: this.rating + product.rating_average.totalRating,
              quantityVote: product.rating_average.quantityVote + 1
            }
          }
          this.productSevice.updateProduct(product.id, newProduct).subscribe(() => {
            this.submitting = false;
            this.inputValue = '';
            this.rating = 0
            this.loadReviews(product.id);
          })
        })

      }, 2000)
    }
  }
  currentPage = 1;
  itemsPerPage = 4;

  get totalItems(): number {
    return this.reviews.length;
  }

  get currentProducts(): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.reviews.slice(startIndex, endIndex);
  }

  changePage(page: number): void {
    this.currentPage = page;
  }

}
