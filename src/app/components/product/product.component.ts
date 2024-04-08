import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { Product  } from '../../types/product';


@Component({
  selector: 'app-product',
  standalone: true,
  imports: [MatCardModule,CommonModule,MatButtonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  @Input() product!:Product;
  @Output() viewProduct=new EventEmitter<number>();

  view(){
    console.log("view");
    this.viewProduct.emit(this.product.id)
  }
}
