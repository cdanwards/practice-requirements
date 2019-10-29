import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { User } from '../interfaces/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[] = [];

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit() {
    this.getUserList();
  }

  async getUserList() {
    try {
      this.users = await this.apiService.getUsers();
      this.users.sort(function(a, b) {
        const emailA = a.emailAddress.toUpperCase();
        const emailB = b.emailAddress.toUpperCase();
        return emailA < emailB ? -1 : emailA > emailB ? 1 : 0;
      });
    } catch (err) {
      console.log(err);
    }
  }

  sortEmails(a, b) {
    const emailA = a.emailAddress.toUpperCase();
    const emailB = b.emailAddress.toUpperCase();
    return emailA < emailB ? -1 : emailA > emailB ? 1 : 0;
  }

  onLoadAddUser() {
    this.router.navigate(['/add-user']);
  }
}
