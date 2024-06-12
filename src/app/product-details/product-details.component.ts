import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent{
  // constructor(private api:SharedService, private activatedroute:ActivatedRoute){}
  // ngOnInit(): void{
  //   let productid=this.activatedroute.snapshot.paramMap.get('productid');
  //   console.log("product id is", productid);
  // }

}
