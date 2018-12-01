import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  host: {
    class: 'login content-block padding-25 center-absolute'
  },
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  login(){
    this.router.navigateByUrl('/admin');
  }

  cancel(){
    this.router.navigateByUrl('users');
  }
}
