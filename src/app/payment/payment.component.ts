import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog'
import { SuccessDialogComponent } from '../success-dialog/success-dialog.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent {

  constructor(private dialog: MatDialog, private route: ActivatedRoute) {}

  selectedOption: string | null = null;

  totalPrice: number = 0;
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.totalPrice = +params['total'] || 0; // + operator converts string to number
    });
  }

  toggle(option: string) {
    if (this.selectedOption == option) {
      this.selectedOption = null; // Collapse if already open
    } else {
      this.selectedOption = option; // Expand if closed
    }
    console.log('Selected option:', this.selectedOption);
  }

  openSuccess(){
    this.dialog.open(SuccessDialogComponent);
    console.log("Success!!!");
    }
}
