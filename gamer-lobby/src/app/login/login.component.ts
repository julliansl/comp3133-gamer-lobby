import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { AuthService } from '../services/auth.service';

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

  ngOnInit() { }

  login() {
    this.router.navigateByUrl('/admin');
  }

  cancel() {
    this.router.navigateByUrl('users');
  }
}
