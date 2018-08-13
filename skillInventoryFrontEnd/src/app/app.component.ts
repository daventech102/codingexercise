import { Component } from '@angular/core';
import { NavComponent } from './nav/nav.component';


@Component({
  selector: 'app-root',
  template: `
            <app-nav></app-nav>
            <router-outlet></router-outlet>

            `
  //styleUrls: ['./app.component.css']
})
export class AppComponent {}
