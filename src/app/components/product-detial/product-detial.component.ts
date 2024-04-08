import { Component ,inject} from '@angular/core';
import { Product } from '../../types/product';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { ProductService } from '../../product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detial',
  standalone: true,
  imports: [MatCardModule,CommonModule,MatButtonModule],
  templateUrl: './product-detial.component.html',
  styleUrl: './product-detial.component.scss'
})
export class ProductDetialComponent {
  product!:Product;
  productService=inject(ProductService);
  activatedRoute =inject(ActivatedRoute);
  ngOnInit(){
    let productId=this.activatedRoute.snapshot.params['id'];
    // let productId = 1
    this.productService.getProductByid(productId).subscribe(result=>{
      this.product=result;
    })

  }
}
