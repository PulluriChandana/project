//app.component.ts
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedService } from './shared.service';


@Component({
  selector: 'app-root',
  standalone: true,
  providers: [SharedService],
  imports: [RouterOutlet, HomeComponent, AboutUsComponent, ContactUsComponent, HttpClientModule,
    RouterModule, NotFoundComponent, RegisterComponent, LoginComponent, ProductComponent, ProductDetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'project';
}
