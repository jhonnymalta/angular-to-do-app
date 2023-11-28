import { Component } from '@angular/core';
import { CommonModule, getLocaleCurrencySymbol } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from '../Auth.service';


@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './signup.component.html',
 
})


export class SignupComponent {

 constructor(private authService: AuthService){
          
 }

  onSubmit(form: NgForm){
    this.authService.registerUser(
      {
        email: form.value.email,
        password: form.value.password

      }
    )
  }
}
