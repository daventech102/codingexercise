import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule}  from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { WebapiService } from './webapi.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http'


import { AppComponent } from './app.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms'
import { EmployeesComponent } from './employees/employees.component';
import { EachEmployeeComponent } from './employees/each-employee.component';
import { MyskillsComponent } from './my-skills/my-skills.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { SearchEmployeesPipe } from './employees/search-employees.pipe';

var routes = [{
  path: '',
  component: HomeComponent
},
{
  path: 'myskills',
  component: MyskillsComponent
},
{
  path: 'employees',
  component: EmployeesComponent
},
{
  path: 'employees/:name',
  component: EmployeesComponent
},
{
  path: 'register',
  component: RegisterComponent
},
{
  path: 'login',
  component: LoginComponent
},
{
  path: 'user',
  component: UserComponent
}
];


@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    MyskillsComponent,
    NavComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    UserComponent,
    EachEmployeeComponent,
    SearchEmployeesPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatToolbarModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [WebapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
