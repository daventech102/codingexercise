import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  
})
export class NavComponent implements OnInit {

  constructor(private auth: AuthService) {}

  ngOnInit() {
  }

}
