import { Component, OnInit } from '@angular/core';

import { AuthService } from '../shared/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formData: any = {};

  constructor(private auth: AuthService) { }

  ngOnInit() {

    this.formData = {};
  }

  register() {

    this.auth.register(this.formData).subscribe(

      () => {

         console.log('Success');

        // this.router.navigate(['/login', {registered: 'success'}]);

      },

      (errorResponse) => {

        console.log(errorResponse);

      });
  }
}
