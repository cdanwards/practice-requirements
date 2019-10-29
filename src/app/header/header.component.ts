import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  onLoadUsers() {
    this.router.navigate(['/users']);
  }

  onLoadAddUser() {
    this.router.navigate(['/add-user']);
  }

  onLoadLazy() {
    this.router.navigate(['/lazy-loaders']);
  }
}
