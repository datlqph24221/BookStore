import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { DetailComponent } from './pages/detail/detail.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { ItemProductComponent } from './component/item-product/item-product.component';
import { SliceItemProductComponent } from './component/slice-item-product/slice-item-product.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { SlideComponent } from './pages/home/component/slide/slide.component';
import { ListNewProductComponent } from './pages/home/component/list-new-product/list-new-product.component';
import { ListHotProductComponent } from './pages/home/component/list-hot-product/list-hot-product.component';
import { ListTopProductComponent } from './pages/home/component/list-top-product/list-top-product.component';
import { HttpClientModule } from '@angular/common/http';
import { ClientComponent } from './layout/client/client.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { EndBannerComponent } from './pages/home/component/end-banner/end-banner.component';
import { QuantityButtonComponent } from './component/quantity-button/quantity-button.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ManageInfoCustomerComponent } from './pages/manage-info-customer/manage-info-customer.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { vi_VN } from 'ng-zorro-antd/i18n';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { FormInfoComponent } from './pages/manage-info-customer/component/form-info/form-info.component';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { SidebarMenuComponent } from './component/sidebar-menu/sidebar-menu.component';
import { ChangePasswordComponent } from './pages/manage-info-customer/component/change-password/change-password.component';
import { ManageOrderComponent } from './pages/manage-info-customer/component/manage-order/manage-order.component';
import { registerLocaleData } from '@angular/common';
import localeVi from '@angular/common/locales/vi';
import { SearchComponent } from './pages/search/search.component';
import { ProductsComponent } from './pages/products/products.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { NzCommentModule } from 'ng-zorro-antd/comment';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzPopoverModule } from 'ng-zorro-antd/popover';



registerLocaleData(localeVi);
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailComponent,
    CartComponent,
    CheckoutComponent,
    ItemProductComponent,
    SliceItemProductComponent,
    HeaderComponent,
    FooterComponent,
    SlideComponent,
    ListNewProductComponent,
    ListHotProductComponent,
    ListTopProductComponent,
    ClientComponent,
    EndBannerComponent,
    QuantityButtonComponent,
    LoginComponent,
    RegisterComponent,
    ManageInfoCustomerComponent,
    FormInfoComponent,
    SidebarMenuComponent,
    ChangePasswordComponent,
    ManageOrderComponent,
    SearchComponent,
    ProductsComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'detail/:id',
        component: DetailComponent,
        data: { scrollPosition: 'top' } // Thiết lập cuộn lên đầu trang
      },
    ], {
      scrollPositionRestoration: 'enabled', // Cho phép cuộn trang
    }),
    SlickCarouselModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NzFormModule,
    NzInputModule,
    NzRadioModule,
    NzDatePickerModule,
    NzDropDownModule,
    NzTableModule,
    NzButtonModule,
    NzIconModule,
    NzModalModule,
    NzMessageModule,
    NzPopconfirmModule,
    NzRateModule,
    NzCommentModule,
    NzAvatarModule,
    NzPaginationModule,
    NzPopoverModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: vi_VN }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
