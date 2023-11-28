
import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ProductComponent } from './product/product.component';
import { SignupComponent } from './auth/signup/signup.component';
import {LoginComponent} from './auth/login/login.component';



export const routes: Routes = [
    {path:'', component:HomeComponent},
    {path:'products', component: ProductComponent},
    {path:'signup', component: SignupComponent},
    {path:'login', component: LoginComponent}
];



