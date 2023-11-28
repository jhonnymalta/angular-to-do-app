import { Component,OnInit,OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet,RouterLink,RouterLinkActive } from '@angular/router';
import { AuthService } from '../auth/Auth.service';
import { Subscription} from 'rxjs'

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,RouterOutlet,RouterLink,RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit, OnDestroy {

isAuth:boolean = false;
private authSubscription: Subscription | any;

constructor(private authService: AuthService){}

ngOnInit() {
    this.authSubscription= this.authService.authChange.subscribe(authStatus =>{
          this.isAuth = authStatus;
    })
}
ngOnDestroy(){
this.authSubscription.unsubscribe();

}
onLogout(){
  this.authService.Logout();
}

}
