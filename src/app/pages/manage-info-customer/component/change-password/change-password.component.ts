import { Component } from '@angular/core';
import {
  FormBuilder,
  Validators
} from '@angular/forms';
import { UserService } from 'src/app/service/user.service';
import { NzMessageService } from 'ng-zorro-antd/message';
@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {
  user!: any;
  id = localStorage.getItem('id');
  validateForm = this.fb.group({
    password: ['', [Validators.required]],
    newPassword: ['', [Validators.required]],
    confirmNewPassword: ['', [Validators.required]],

  });
  get password() {
    return this.validateForm.get("password")?.value
  }
  get newPassword() {
    return this.validateForm.get("newPassword")
  }
  get confirmNewPassword() {
    return this.validateForm.get("confirmNewPassword")
  }

  constructor(private fb: FormBuilder, private userSevice: UserService, private message: NzMessageService) {
    this.userSevice.getOne(this.id).subscribe(data => {
      this.user = data;
      console.log(this.user);

    })

  }
  createBasicMessage() {
    this.message.info('Cần điền đầy đủ thông tin');
  }
  submitForm(): void {
    if (this.validateForm.valid) {

      if (this.password != this.user.confirmPassword) {
        this.message.error("Nhập sai mật khẩu hiện tại");
      }
      else if (this.newPassword?.value != this.confirmNewPassword?.value) {
        this.message.error("Nhập mật khẩu mới không trùng khớp");
      }
      else {
        const userformupdate = {
          lastname: this.user?.lastname || "",
          firstname: this.user?.firstname || "",
          phoneNumber: this.user?.phoneNumber || "",
          email: this.user?.email || "",
          password: this.newPassword?.value || "",
          confirmPassword: this.newPassword?.value || "",
          image: this.user?.image,
          birthday: this.user?.birthday,
          gender: this.user?.gender,
          address: this.user?.address,
          role: this.user?.role,
          id: this.user?.id
        }
        this.userSevice.update(this.id, userformupdate).subscribe(data => {
          this.message.info("Cập nhật thành công");
          location.reload()
        })
      }


    } else { this.createBasicMessage() }
  }
}
