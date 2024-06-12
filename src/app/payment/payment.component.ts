import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog'
import { SuccessDialogComponent } from '../success-dialog/success-dialog.component';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent {

  constructor(private dialog: MatDialog) {}

  selectedOption: string | null = null;

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
