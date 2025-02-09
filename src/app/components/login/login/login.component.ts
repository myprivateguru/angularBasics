import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import {FirebaseApp,} from 'firebase/app';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username:string='';
  password:string='';
  rememberMe:boolean=false;
  isforgotPass:boolean=false;
  isLoggedIn:boolean=false;
  constructor(private router : Router,  public authService: AuthService){

  }

  onSubmit(email:string,password:string){
    console.log(this.username.length);
    console.log(this.password);
  }
  signup(){
    this.router.navigateByUrl("/signup");
  }

  forgotpass(){
    this.isforgotPass=true;

  }
  loginWithGoogle(){
    this.authService.GoogleAuth();
    if(this.isLoggedIn){
      this.router.navigateByUrl("/dashboard");
    }
   }
  ngOnInit(){
this.isLoggedIn=this.authService.isLoggedIn;
  }

}
