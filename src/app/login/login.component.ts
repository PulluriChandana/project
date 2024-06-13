import { Component,OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Idata } from '../Idata';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule,HttpClientModule],
  providers:[SharedService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;
  

  constructor(private formBuilder: FormBuilder, private http: HttpClient,private fb: FormBuilder,
    private auth:SharedService,private router:Router) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      remember: [false]
    });
  }
      onSubmit() {
     if(this.loginForm.valid){
        console.log(this.loginForm.value)
        this.auth.login(this.loginForm.value).subscribe({
          next:(res)=>{
            alert(res.Message);
            this.loginForm.reset();
            this.router.navigate(['register']);
          },
          error:(err)=>{
            alert(err.error.message);
            this.loginForm.reset();
          }
        })
     }
  }
}