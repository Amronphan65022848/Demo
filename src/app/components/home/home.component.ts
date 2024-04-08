import { Component, inject } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { CommonModule } from '@angular/common';
import { SearchComponent } from '../search/search.component';
import { ProductService } from '../../product.service';
import { Product } from '../../types/product';
import { Router } from '@angular/router'; // แก้ไข import เป็น '@angular/router'

@Component({
  selector: 'app-home',
  standalone: true, // ไม่แน่ใจว่า standalone เป็นอะไร อาจจะไม่จำเป็นต้องใช้
  imports: [ProductComponent, CommonModule, SearchComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'] // แก้ไขเป็น styleUrls
})
export class HomeComponent {
  product: Product[] = [];
  filteredProduct: Product[] = [];
  productSevice = inject(ProductService);
  router = inject(Router); 

  ngOnInit() {
    this.productSevice.getProduct().subscribe((result) => {
      console.log(result);
      this.product = result;
      this.filteredProduct = this.product;
    });
  }

  onViewProduct(event: any) {
    console.log("onViewProduct", event);
    this.router.navigateByUrl("/product/" + event); 
  }

  onSearch(search: string) {
    console.log("home", search);
    if (search) {
      this.filteredProduct = this.product.filter(x => x.name.toLowerCase().includes(search.toLowerCase()));
    } else {
      this.filteredProduct = this.product;
    }
  }
}
