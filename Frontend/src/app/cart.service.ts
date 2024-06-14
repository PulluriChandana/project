// cart.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { product } from './product/productmodal';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: { item: product, quantity: number }[] = [];
  private cartSubject = new BehaviorSubject<{ item: product, quantity: number }[]>([]);
  cart$ = this.cartSubject.asObservable();

  constructor() {
    this.loadCart();
  }

  addToCart(product: product): void {
    const currentCart = this.cartSubject.value;
    const itemIndex = currentCart.findIndex(item => item.item.id === product.id);

    if (itemIndex >= 0) {
      currentCart[itemIndex].quantity++;
    } else {
      currentCart.push({ item: product, quantity: 1 });
    }

    this.cartSubject.next(currentCart);
    this.saveCart(currentCart);
  }

  removeFromCart(product: product): void {
    const currentCart = this.cartSubject.value.filter(item => item.item.id !== product.id);
    this.cartSubject.next(currentCart);
    this.saveCart(currentCart);
  }

  increaseQuantity(product: product): void {
    const currentCart = this.cartSubject.value;
    const itemIndex = currentCart.findIndex(item => item.item.id === product.id);

    if (itemIndex >= 0) {
      currentCart[itemIndex].quantity++;
      this.cartSubject.next(currentCart);
      this.saveCart(currentCart);
    }
  }

  decreaseQuantity(product: product): void {
    const currentCart = this.cartSubject.value;
    const itemIndex = currentCart.findIndex(item => item.item.id === product.id);

    if (itemIndex >= 0) {
      if (currentCart[itemIndex].quantity > 1) {
        currentCart[itemIndex].quantity--;
        this.cartSubject.next(currentCart);
        this.saveCart(currentCart);
      }
    }
  }

  getCartItems(): { item: product, quantity: number }[] {
    return this.cartSubject.value;
  }

  getTotalPrice(): number {
    return this.cartSubject.value.reduce((total, cartItem) => total + cartItem.item.price * cartItem.quantity, 0);
  }

  private loadCart(): void {
    if (this.isLocalStorageAvailable()) {
      const storedCart = localStorage.getItem('cart');
      if (storedCart) {
        this.cartSubject.next(JSON.parse(storedCart));
      }
    }
  }

  private saveCart(cart: { item: product, quantity: number }[]): void {
    if (this.isLocalStorageAvailable()) {
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }

  private isLocalStorageAvailable(): boolean {
    try {
      const testKey = '__testLocalStorageAvailability';
      localStorage.setItem(testKey, testKey);
      localStorage.removeItem(testKey);
      return true;
    } catch (e) {
      return false;
    }
  }
}
