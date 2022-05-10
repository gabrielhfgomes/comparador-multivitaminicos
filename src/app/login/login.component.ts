import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string;
  password: string;
  loginError: boolean;
  errors: String[];

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {

  }

  onSubmit(form: NgForm) {
    this.authService
      .tryLogin(form.value.username, form.value.password)
      .subscribe({
        next: (r) => {
          const access_token = JSON.stringify(r);
          localStorage.setItem('access_token', access_token);
          console.log(r);
          this.router.navigate(['/home'])
        },
        error: (e) => { this.errors = ['Usuário e/ou senha incorretos'] }
      })
  }

}
