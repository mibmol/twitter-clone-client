import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {

  constructor(
      private loginService: LoginService
  ) { }

  ngOnInit() {
  }

  user_id(){
      console.log(this.loginService.get_login_info().user.id)
      return this.loginService.get_login_info().user.id
  }

}
