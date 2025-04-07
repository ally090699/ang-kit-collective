import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { Products, Product } from '../../../db-data';

@Component({
  selector: 'app-shop',
  imports: [CommonModule, ProductCardComponent],
  standalone: true,
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.sass'
})
export class ShopComponent {
  products: Product[] = Products;
}
