import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from '../shared.service';
import { product } from '../product/productmodal';
import { CommonModule } from '@angular/common';
import { CartService } from '../cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class ProductDetailsComponent implements OnInit {
  product$: Observable<product> | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private api: SharedService,
    private cartService: CartService // Inject CartService
  ) { }

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      //this.getProductDetails(parseInt(productId, 10));
      this.product$ = this.api.getProductById(parseInt(productId, 10));
    
    }
  }

  // getProductDetails(productId: number): void {
  //   this.api.getProductById(productId).subscribe(res => {
  //     this.product = res;
  //   });
  // }
  addToCart(product: product): void {
    this.cartService.addToCart(product); // Add the product to the cart
    this.router.navigate(['/cart']); // Navigate to the cart page
  }
}
