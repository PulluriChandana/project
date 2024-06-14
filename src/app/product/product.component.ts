import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { CommonModule } from '@angular/common';
import { product } from './productmodal';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {
  data: product[] = [];
  filteredData: product[] = [];
  categories: string[] = [];

  filter = {
    category: ''
  };

  sort = {
    price: '',
    rating: ''
  };

  constructor(
    private api: SharedService, 
    private router: Router, 
    private cartService: CartService) {}

  ngOnInit(): void {
    this.displayProducts();
  }

  displayProducts() {
    this.api.getProduct().subscribe(res => {
      this.data = res;
      this.filteredData = res;
      this.categories = [...new Set(res.map(item => item.category))];
      console.log(res);
    });
  }

  applyFilter() {
    this.filteredData = this.data.filter(item => 
      (!this.filter.category || item.category === this.filter.category)
    );
    this.applySort();
  }

  applySort() {
    if (this.sort.price) {
      this.filteredData = this.filteredData.sort((a, b) => 
        this.sort.price === 'asc' ? a.price - b.price : b.price - a.price
      );
    }

    if (this.sort.rating) {
      this.filteredData = this.filteredData.sort((a, b) => 
        this.sort.rating === 'asc' ? a.rating - b.rating : b.rating - a.rating
      );
    }

    // Reset filteredData to original data when both price and rating sort are empty
    
  }

  addToCart(product: product): void {
    this.cartService.addToCart(product);
    this.router.navigate(['/cart']);
  }

  action(productId: number) {
    this.router.navigate(['/productdet', productId]);
  }
}
