import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { BasicdAuthenticationService } from '../service/basic-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = "stef";
  password = "";
  errorMessage = "Invalid Credentials";
  invalidLogin = false;

  //Use Dependency Injection to use Router
  //Use DI to use Auth Service
  constructor(private router: Router, 
    private auth:HardcodedAuthenticationService,
    private basicAuthService: BasicdAuthenticationService) { }

  ngOnInit(): void {

  }
  handleLogin() {
    console.log(this.username);
    if(this.auth.authenticate(this.username, this.password)){
      this.router.navigate(["welcome", this.username])
      this.invalidLogin = false;
    }
    else {
      this.invalidLogin = true;
    }
    
  }

  handleBasicAuthLogin() {
    console.log(this.username);
    this.basicAuthService.executAuthenticationService(this.username, this.password)
    .subscribe(
      data => {
        console.log(data)
        this.router.navigate(["welcome", this.username])
        this.invalidLogin = false;
      },
      error => {
        console.log(error);
        this.invalidLogin = true;
      }
    )
    
  }

  handleJWTAuthLogin() {
    console.log(this.username);
    this.basicAuthService.executJWTAuthenticationService(this.username, this.password)
    .subscribe(
      data => {
        console.log(data)
        this.router.navigate(["welcome", this.username])
        this.invalidLogin = false;
      },
      error => {
        console.log(error);
        this.invalidLogin = true;
      }
    )
    
  }

}
