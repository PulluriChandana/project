import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { SharedService } from '../shared.service';
import { Observable } from 'rxjs';
import { Idata } from '../Idata';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { error } from 'node:console';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-registeruser',
  standalone:true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule,HttpClientModule],
  providers:[SharedService, AuthService],
  templateUrl: './registeruser.component.html',
  styleUrls: ['./registeruser.component.css']
})

export class RegisteruserComponent {

  user = {
    email: '',
    password: '',
    reEnterPassword: '',
    phone: ''
  };

  constructor(private authService: AuthService) { }

  register() {
    if (this.user.password !== this.user.reEnterPassword) {
      alert('Passwords do not match!');
      return;
    }

    this.authService.register(this.user).subscribe(
      response => {
        alert('User registered successfully');
      },
      error => {
        console.error('Error registering user', error);
        alert('Error registering user');
      }
    );
  }
}
