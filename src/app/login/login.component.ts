import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  username: string;
  password: string;
  loginError: boolean;
  
  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  onSubmit(form: NgForm) {
    console.log(`Dados ${form.value.username}, ${form.value.password}`);
    this.router.navigate(['/home']);
  }

}
