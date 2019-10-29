import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  userForm: FormGroup;
  typeIds: Array<any> = [4, 25, 6, 74, 3, 86, 3, 34];
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.userForm = new FormGroup({
      emailAddress: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      isPrimary: new FormControl(true, [Validators.required]),
      emailTypeId: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required])
    });
  }

  async onSubmit() {
    try {
      await this.apiService.addUser(this.userForm.getRawValue());
    } catch ({ message = 'Error Adding User, please try again' }) {
      console.log(message);
    }
  }
}
