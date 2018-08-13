import { Injectable } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { MatSnackBar } from '@angular/material';
import { AuthService } from './auth.service';
import { map } from "rxjs/operators";






@Injectable(
  //providedIn: 'root'
)
export class WebapiService {

  BASE_URL = 'http://localhost:61345/api';
  private messageStore = [];

  private messageSubjet = new Subject();
  
  messages = this.messageSubjet.asObservable();

  constructor(private http: Http, private sb: MatSnackBar, private auth:AuthService) {
    this.getMessages('');
  }

  getMessages(user) {
    user = (user) ? '/' + user : '';
    this.http.get(this.BASE_URL + '/messages' + user).subscribe(response => {
        this.messageStore = response.json();
        this.messageSubjet.next(this.messageStore);
    }, error => {
        this.handleError("Unable to get messages");
    });
}

async postMessage(message) {
  try {
      var response = await this.http.post(this.BASE_URL + '/messages', message).toPromise();
      this.messageStore.push(response.json());
      this.messageSubjet.next(this.messageStore);
  } catch (error) {
      this.handleError("Unable to post message");
  }
}

getUser() {
  return this.http.get(this.BASE_URL + '/users/me', this.auth.tokenHeader).pipe(map(res => res.json()));
}

saveUser(userData) {
  return this.http.post(this.BASE_URL + '/users/me', userData,this.auth.tokenHeader).pipe(map(res => res.json()));
}

private handleError(error) {
  console.error(error);
  this.sb.open(error, 'close', { duration: 2000 });
}
}
