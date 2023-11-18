import { ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-manage-order',
  templateUrl: './manage-order.component.html',
  styleUrls: ['./manage-order.component.css']
})
export class ManageOrderComponent {
  listOfData: any[] = [];
  isVisible: boolean[] = new Array(this.listOfData.length).fill(false);
  constructor(
    private orderService: OrderService,
    private message: NzMessageService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {
    const id = localStorage.getItem('id')
    this.orderService.getOrderByUserId(id).subscribe((data: any) => {
      this.listOfData = data
      console.log(data);

    })
  }
  loadReviews(id: any): void {
    this.orderService.getOrderByUserId(id).subscribe((data: any) => {
      this.listOfData = data;
      this.cdr.detectChanges();
    });
  }
  showModal(index: number): void {
    this.isVisible[index] = true;
  }

  handleOk(index: number): void {
    this.isVisible[index] = false;
  }

  handleCancel(index: number): void {
    this.isVisible[index] = false;
  }
  confirm(id: any): void {
    this.orderService.getOneOrder(id).subscribe((data: any) => {
      const order = {
        userId: data.userId,
        email: data.email,
        firstname: data.firstname,
        lastname: data.lastname,
        phoneNumber: data.phoneNumber,
        date: data.date,
        address: data.address,
        note: data.note,
        paymentMethod: data.paymentMethod,
        orderProduct: data.orderProduct,
        orderPrice: data.orderPrice,
        orderState: "Đã hủy",
      }
      this.orderService.updateOrder(id, order).subscribe((data: any) => {
        this.message.info('Hủy đơn thành công');
        this.loadReviews(localStorage.getItem('id'))

      })
    })
  }
  VND = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  });
}
