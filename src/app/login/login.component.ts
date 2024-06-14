import { Component,OnInit } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Idata } from '../Idata';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule,HttpClientModule],
  providers:[SharedService, AuthService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  credentials = {
    email: '',
    password: ''
  };

  constructor(private authService: AuthService, private router: Router, private http:HttpClient) { }


  login() {
    this.http.post('http://localhost:5281/api/auth/login', this.credentials)
      .pipe(
        catchError(error => {
          console.error('Error logging in', error);
          return throwError(error);
        })
      )
      .subscribe(response => {
        console.log('Logged in successfully', response);
        this.router.navigate(['/home']);
      });
  }  
}