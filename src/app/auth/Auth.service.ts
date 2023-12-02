import { User } from "./User.model"
import { AuthDatha } from "./Auth-Data.model"
import { Subject } from "rxjs";



export class AuthService{

    
    private user: User | any;
    authChange = new Subject<boolean>();
    

    registerUser(authDatha: AuthDatha){
        this.user = {
            email: authDatha.email,
            userId: Math.round(Math.random() * 10000).toString()     
            
        };
        this.authChange.next(true);
    }


    Login(authDatha: AuthDatha, ){
        this.user = {
            email: authDatha.email,
            userId: Math.round(Math.random() * 10000).toString()     
            
        };
        this.authChange.next(true);
    }

    Logout(){
        this.user = null;
        this.authChange.next(false);
    }

    GetUser(){
      return  {...this.user}
    }

    IsAuth(){        
        return this.user != null;       
         
       
    }
}