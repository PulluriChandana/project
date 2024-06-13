import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { SharedService } from '../shared.service';
import { Observable } from 'rxjs';
import { Idata } from '../Idata';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { error } from 'node:console';

@Component({
  selector: 'app-registeruser',
  standalone:true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule,HttpClientModule],
  providers:[SharedService],
  templateUrl: './registeruser.component.html',
  styleUrls: ['./registeruser.component.css']
})
export class RegisteruserComponent implements OnInit {
  //public response:Observable<Idata[]>;

  registerForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,public service:SharedService,
    private http:HttpClient,private auth:SharedService,private router:Router) {
    //this.response=this.service.getposts();
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: [null, Validators.required],
      phone: [null, Validators.required],
      password: [null, Validators.required],
      confirmpassword: [null, Validators.required]
    });
  }

  /*onSubmit() {
    //console.log(this.registerForm?.value);
    this.http.post("http://localhost:5200/api/users",this.registerForm?.value).subscribe((response)=>
    {console.log(response);
      this.registerForm.reset();
    })
  }*/
  onSubmit(){
    if(this.registerForm.valid){
      this.auth.signup(this.registerForm.value)
      .subscribe({
        next:(res=>{
          alert(res.message);
          this.registerForm.reset();
          this.router.navigate(['login']);
        })
        ,error:(err=>{
          alert(err.error.message);
          this.registerForm.reset();
        })
        
      })
      console.log(this.registerForm.value)
    }
  }
}
