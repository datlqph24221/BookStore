import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ClientComponent } from './layout/client/client.component';
import { DetailComponent } from './pages/detail/detail.component';
import { CartComponent } from './pages/cart/cart.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ManageInfoCustomerComponent } from './pages/manage-info-customer/manage-info-customer.component';
import { ChangePasswordComponent } from './pages/manage-info-customer/component/change-password/change-password.component';
import { ManageOrderComponent } from './pages/manage-info-customer/component/manage-order/manage-order.component';
import { FormInfoComponent } from './pages/manage-info-customer/component/form-info/form-info.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { AuthGuard } from './guard/user.guard';
import { SearchComponent } from './pages/search/search.component';
import { ProductsComponent } from './pages/products/products.component';

const routes: Routes = [
    {
        path: '', component: ClientComponent, children: [
            { path: "", redirectTo: 'home', pathMatch: 'full' },
            { path: "home", component: HomeComponent },
            { path: "detail/:id", component: DetailComponent },
            { path: "cart", component: CartComponent },
            { path: "login", component: LoginComponent },
            { path: "register", component: RegisterComponent },
            { path: "search", component: SearchComponent },
            { path: "category/:name", component: ProductsComponent },
            {
                path: "customer",
                canActivate: [AuthGuard],
                component: ManageInfoCustomerComponent,
                children: [
                    { path: "", redirectTo: 'information', pathMatch: 'full' },
                    { path: "information", component: FormInfoComponent },
                    { path: "change-password", component: ChangePasswordComponent },
                    { path: "manage-order", component: ManageOrderComponent },
                ]
            },
            { path: "checkout", canActivate: [AuthGuard], component: CheckoutComponent },

        ]
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }