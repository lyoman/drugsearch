import { AuthService } from './../services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import jwt_decode from 'jwt-decode';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [routerTransition()]
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private authservice: AuthService,
    private toastr: ToastrService,

  ) {

  }

  formModel = {
    username: '',
    password: ''
  };

  loginError: any;
  username: any;
  deviceToken: any;

  myUsername: any;

  getUserDetails: any;

  loading: any;

  token = [
    {name: "mytoken"}
  ];

  user = 
    {firstName: "Leo", lastName: "Muchenje", fullName: "Leo Muchenje"}
  

  ngOnInit() {

  }

  onSubmit(form: NgForm) {
    this.loading = true;
    localStorage.setItem('token', JSON.stringify(this.token));
    localStorage.setItem('user', JSON.stringify(this.user));
    this.toastr.success('Welcome!', 'Authentication successful.');
    localStorage.setItem('isLoggedin', 'true');
    this.router.navigateByUrl('/dashboard');
    this.loading = false;
  }

  onSubmit1(form: NgForm) {
    this.loading = true;
    console.log(form.value)
    localStorage.setItem('unique_name', JSON.stringify(form.value.username));
    this.authservice.login(form.value)
      .subscribe
      (
        data => {
          localStorage.setItem('token', JSON.stringify(data['token']));
          localStorage.setItem('user', JSON.stringify(data['user']));
          localStorage.setItem('phone', JSON.stringify(data['user']['phoneNumber']));
          // console.log("data", data);
          // console.log("user", JSON.stringify(data['user']));

          this.loading = false;
          // console.log(data['token']);
          // this.token = data['token'];
          // this.getUserDetails = jwt_decode(data['token']);
          this.toastr.success('Welcome!', 'Authentication successful.');
          localStorage.setItem('isLoggedin', 'true');
          this.router.navigateByUrl('/login/verify-otp');
        },

        err => {
          this.loading = false;
          console.log(err);
          if (err.status === 400) {
            this.toastr.error('Incorrect username or password.', 'Authentication failed.');
          } else {
            this.toastr.error('Error', err.message);
          }
          
        });
  }

}
