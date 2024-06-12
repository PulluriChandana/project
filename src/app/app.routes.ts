import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NgModule } from '@angular/core';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { PaymentComponent } from './payment/payment.component';

export const routes: Routes = [
    {path:'home',component:HomeComponent},
    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: 'about', component: AboutUsComponent },
    { path: 'contact', component: ContactUsComponent },
    {path:'register',component:RegisterComponent},
    {path:'login',component:LoginComponent},
    {path:'payment', component: PaymentComponent},
    { path: '**', component: NotFoundComponent }
    
  
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
