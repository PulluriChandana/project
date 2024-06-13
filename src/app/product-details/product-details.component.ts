import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from '../shared.service';
import { product } from '../product/productmodal';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class ProductDetailsComponent implements OnInit {
  product: product | undefined;

  constructor(private route: ActivatedRoute, private api: SharedService) {}

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      this.getProductDetails(parseInt(productId, 10));
    }
  }

  getProductDetails(productId: number): void {
    this.api.getProductById(productId).subscribe(res => {
      this.product = res;
    });
  }
}
