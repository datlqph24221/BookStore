import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  Validators
} from '@angular/forms';
import { UserService } from 'src/app/service/user.service';
import { NzMessageService } from 'ng-zorro-antd/message';
@Component({
  selector: 'app-form-info',
  templateUrl: './form-info.component.html',
  styleUrls: ['./form-info.component.css']
})
export class FormInfoComponent {
  user!: any;
  id = localStorage.getItem('id');
  validateForm = this.fb.group({
    email: ['', [Validators.email, Validators.required]],
    firstname: ['', [Validators.required]],
    lastname: ['', [Validators.required]],
    phoneNumber: ['', [Validators.required]],
    birthday: ['', [Validators.required]],
    gender: ['', [Validators.required]],
    address: ['', [Validators.required]],
  });
  get firstname() {
    return this.validateForm.get("firstname")
  }
  get lastname() {
    return this.validateForm.get("lastname")
  }
  get phoneNumber() {
    return this.validateForm.get("phoneNumber")
  }
  get email() {
    return this.validateForm.get("email")
  }
  get birthday(): any {
    return this.validateForm.get("birthday")
  }
  get gender() {
    return this.validateForm.get("gender")
  }
  get address() {
    return this.validateForm.get("address")
  }



  constructor(private fb: FormBuilder, private userSevice: UserService, private message: NzMessageService) {
    this.userSevice.getOne(this.id).subscribe(data => {
      this.user = data;
      this.initializeForm();
    })

  }
  initializeForm(): void {
    this.validateForm.patchValue({
      email: this.user?.email,
      firstname: this.user?.firstname,
      lastname: this.user?.lastname,
      phoneNumber: this.user?.phoneNumber,
      birthday: this.user?.birthday,
      gender: this.user?.gender,
      address: this.user?.address
    })
  }
  createBasicMessage() {
    this.message.info('Cần điền đầy đủ thông tin');
  }
  submitForm(): void {
    if (this.validateForm.valid) {
      const userformupdate = {
        firstname: this.firstname?.value || "",
        lastname: this.lastname?.value || "",
        phoneNumber: this.phoneNumber?.value || "",
        email: this.email?.value || "",
        password: this.user?.confirmPassword || "",
        confirmPassword: this.user?.confirmPassword || "",
        image: this.user?.image,
        birthday: this.birthday?.value,
        gender: this.gender?.value,
        address: this.address?.value,
        role: this.user?.role,
        id: this.user?.id
      }
      this.userSevice.update(this.id, userformupdate).subscribe(data => {
        this.message.info("Cập nhật thành công");
        location.reload()
      })
      console.log(userformupdate, this.validateForm.value);

    } else { this.createBasicMessage() }
  }
}
