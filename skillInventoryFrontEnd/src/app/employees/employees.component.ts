import { Component, OnInit } from '@angular/core';
import { WebapiService } from '../webapi.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  ///styleUrls: ['./employees.component.css']
})
export class EmployeesComponent  {
  query: string;
  constructor(private webapiService : WebapiService, private route: ActivatedRoute) {
    this.query ='';
  }
  
  ngOnInit(){
    var name = this.route.snapshot.params['name'];
    this.webapiService.getMessages(name);
    this.webapiService.getUser().subscribe();
}
  

 
}
