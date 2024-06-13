import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {
  formData: any = {}; 
  constructor(private router:Router){}
  handleSubmit() {
    console.log('Form submitted:', this.formData);
    alert('Your response is submitted!'); 
    this.formData = {}; 
    this.router.navigate(['/home']); 
  }
}
