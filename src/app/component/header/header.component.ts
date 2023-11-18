import { Component } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';
import { CategoryService } from 'src/app/service/category.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  accessToken: any = localStorage.getItem('accessToken');
  id: any = localStorage.getItem('id');
  user!: any;
  subscription: Subscription | undefined;
  searchInput!: string;
  categories: any[] = []
  constructor(
    private userSevice: UserService,
    private router: Router,
    private productService: ProductService,
    private categoriyService: CategoryService
  ) {
    if (this.id) {
      this.subscription = this.userSevice.getOne(this.id).subscribe((data) => {
        this.user = data
      })
    }
    this.categoriyService.getAllCategory().subscribe((data: any) => {
      this.categories = data
    })
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  showActionsList: boolean = false;

  toggleActionsList() {
    this.showActionsList = !this.showActionsList;
  }

  hideActionsList() {
    this.showActionsList = false;
  }
  logOut() {
    localStorage.removeItem("id");
    localStorage.removeItem("accessToken")
    this.router.navigate(['/', 'home']).then(() => location.reload());
  }
  search() {
    if (this.searchInput) {
      const searchQuery = encodeURIComponent(this.searchInput);
      this.router.navigate(['/search'], { queryParams: { q: searchQuery } });
    }

  }
}
