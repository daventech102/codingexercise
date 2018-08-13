import { Component, OnInit } from '@angular/core';
import { WebapiService } from '../webapi.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
  
})
export class UserComponent implements OnInit {

  model = {
    firstName: '',
    lastName: ''
  }

constructor(private webapiService: WebapiService) {}

ngOnInit() {
    this.webapiService.getUser().subscribe( res => {
        this.model.firstName = res.firstName;
        this.model.lastName = res.lastName;
    })
}

saveUser(userData) {
    this.webapiService.saveUser(userData).subscribe();
}

}
