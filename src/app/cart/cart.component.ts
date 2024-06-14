// cart.component.ts
import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { product } from '../product/productmodal';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  imports: [CommonModule],
  standalone:true
})

export class CartComponent implements OnInit {
  cartItems: { item: product, quantity: number }[] = [];
  totalPrice: number = 0;

  constructor(private cartService: CartService, private router:Router) {}

  ngOnInit(): void {
    this.cartService.cart$.subscribe(cart => {
      this.cartItems = cart;
      this.totalPrice = this.cartService.getTotalPrice();
    });
  }

  decreaseQuantity(product: product): void {
    this.cartService.decreaseQuantity(product);
  }

  increaseQuantity(product: product): void {
    this.cartService.increaseQuantity(product);
  }

  removeFromCart(product: product): void {
    this.cartService.removeFromCart(product);
  }

  checkout(): void {
    // Navigate to payment component
    // this.router.navigate(['/payment']);
    this.router.navigate(['/payment'], { queryParams: { total: this.totalPrice } });
  
  }
}
