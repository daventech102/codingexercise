import { Injectable} from '@angular/core';
import { Http,Headers, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  BASE_URL = 'http://localhost:61345/auth';
  NAME_KEY = 'name';
  TOKEN_KEY = 'token'

  constructor(private http: Http, private router: Router, ) { }

  get name() {
    return localStorage.getItem(this.NAME_KEY);
  }

  get isAuthenticated() {
    return !!localStorage.getItem(this.TOKEN_KEY);
  }

  get tokenHeader() {
    var header = new Headers({'Authorization': 'Bearer ' + localStorage.getItem(this.TOKEN_KEY)});
    return new RequestOptions({ headers: header});
  }

  login(loginData) {
    this.http.post(this.BASE_URL + '/login', loginData).subscribe(res => {
        console.log(res.json().success);
        this.authenticate(res);
        if (res.json().success === false){
          alert("incorrect password or email");}
        //   var htmlToAdd:string;
         
        //     var d1 = this.elementRef.nativeElement.querySelector('#login');
        //     d1.insertAdjacentHTML('beforeend', '<span style="color:red;">wrong password or email</span>');
          
        // }
    })
  }

  register(user) {
    delete user.confirmPassword;
    this.http.post(this.BASE_URL + '/register', user).subscribe(res => {
        this.authenticate(res);
    });
  }

  logout() {
    localStorage.removeItem(this.NAME_KEY);
    localStorage.removeItem(this.TOKEN_KEY);
  }

  authenticate(res) {
    var authResponse = res.json();

    if (!authResponse.token)
        return;

    localStorage.setItem(this.TOKEN_KEY, authResponse.token)
    localStorage.setItem(this.NAME_KEY, authResponse.firstName)
    this.router.navigate(['/']);
  }
}
