import { Component, OnInit } from '@angular/core';
import { WebapiService } from '../webapi.service';
import { AuthService } from '../auth.service'

@Component({
  selector: 'app-my-skills',
  templateUrl: './my-skills.component.html'
})
export class MyskillsComponent  {

  constructor(private webapiService : WebapiService, private auth: AuthService) {}

  message = {
      owner: this.auth.name,
      text: ""
  }

  post() {
      this.webapiService.postMessage(this.message);
      
  }

}

