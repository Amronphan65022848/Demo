import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductDetialComponent } from './components/product-detial/product-detial.component';

export const routes: Routes = [
    {
        path :"",
        component:HomeComponent
    },
    {
        path:"products",
        component:HomeComponent

    },
    {
        path:"product/:id",
        component:ProductDetialComponent
    }

];
