import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private authService: AuthService,
    private location: Location) { 
  }

  ngOnInit() { }

}
