import { Component, OnInit } from '@angular/core';
import { LoginService } from './services/login.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    title = 'tiny-twitter-client';

    constructor(
        private login_service: LoginService,
    ) { }

    ngOnInit(): void {
        this.login_service.login({
            username: 'miguelps1',
            password: 'xxx1'
        })
        .subscribe(
            respose => this.login_service.get_login_info().loggedin = true,
            error => console.log(error)
        )
    }


}
