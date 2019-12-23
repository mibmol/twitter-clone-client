import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

    profile_info: any = this.loginService.get_login_info().user;

    constructor(
        private userService: UserService,
        private route: ActivatedRoute,
        private loginService: LoginService
    ) { }

    ngOnInit() {
        this.user_get_profile()
    }

    user_get_profile() {
        this.route.params.subscribe(
            params => {
                let user_id: number = + params['user_id']
                this.userService.user_get_profile(user_id)
                    .subscribe(
                        res => {
                            this.profile_info = res
                        },
                        err => console.log(err)
                    )
            }
        )
    }

}
