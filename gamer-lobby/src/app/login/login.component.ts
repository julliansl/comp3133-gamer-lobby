import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { AuthService } from '../services/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  host: {
    class: 'login form content-block padding-25 center-absolute'
  },
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    if (this.authService.authenticated())
      this.router.navigateByUrl("/users");
  }

  login(form: NgForm) {
    let values = form.value;
    if (values.username && values.password)
      this.authService.login(values.username, values.password);
    else {
      console.log("Authnetication: Invalid Username or Password");
    }
  }

  cancel() {
    this.router.navigateByUrl('users');
  }
}
