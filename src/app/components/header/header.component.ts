import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIconModule,MatButtonModule,MatToolbarModule,RouterLink],
  template:`
  <mat-toolbar style="background-color: #ffb6c1;">
    <button mat-icon-button routerLink="/products" >
      <mat-icon >home</mat-icon>
    </button>
    <span>ร้านขายของ</span>
    <span class="example-spacer"></span>
    
  </mat-toolbar>
  `,
  styles: ``
})
export class HeaderComponent {

}
