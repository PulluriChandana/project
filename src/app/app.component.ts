import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedService } from './shared.service';
import { PaymentComponent } from './payment/payment.component';
import { RegisteruserComponent } from './registeruser/registeruser.component';

@Component({
  selector: 'app-root',
  standalone: true,
  providers: [SharedService],
  imports: [
    RouterOutlet, 
    HomeComponent, 
    AboutUsComponent, 
    ContactUsComponent, 
    NotFoundComponent, 
    LoginComponent, 
    ProductComponent, 
    ProductDetailsComponent, 
    HttpClientModule,
    PaymentComponent,
    RouterModule,
    RegisteruserComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';
}
