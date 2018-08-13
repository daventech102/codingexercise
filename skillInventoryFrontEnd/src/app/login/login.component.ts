import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
  
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService) {}
  loginData = {
    email: '',
    password: ''
  }

  login() {
    this.auth.login(this.loginData);
    //console.log(this.loginData);
  }
  ngOnInit() {
  }

}
