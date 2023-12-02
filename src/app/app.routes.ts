
import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ExerciseComponent} from './exercise/exercise.component'
import { ProductComponent } from './product/product.component';
import { SignupComponent } from './auth/signup/signup.component';
import {LoginComponent} from './auth/login/login.component';
import { AuthGuard } from './auth/Auth.Guard';
import { NgModule } from '@angular/core';



export const routes: Routes = [
   

    {path:'', component:HomeComponent},
    {path:'exercise', component: ExerciseComponent,canActivate:[AuthGuard]},
    {path:'products', component: ProductComponent,canActivate:[AuthGuard]},
    {path:'signup', component: SignupComponent},
    {path:'login', component: LoginComponent}
];




