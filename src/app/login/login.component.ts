import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: string = '';
  pass: string = '';

  constructor() { }

  ngOnInit(): void {

  }
  entrar() {
    alert('yujuuuuu' + " " + this.user + " " + this.pass);
  }

}
