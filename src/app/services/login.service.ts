import { Injectable } from '@angular/core';
import { User } from '../components/models/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    private login_info: {
        loggedin: boolean,
        user: User
    } = {
            loggedin: false,
            user: new User
        }

    constructor(
        private http: HttpClient,
    ) {}


    login(login_data) {
        return this.http.post('http://localhost:8000/auth/login', login_data,{
            withCredentials: true
        })
    }

    logout() {
        this.login_info.loggedin = false
    }

    get_login_info() {
        return this.login_info
    }
}
