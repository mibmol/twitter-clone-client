import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { urls } from './endpoints';
import { LoginService } from './login.service';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(
        private http: HttpClient
    ) { }

    user_get_profile(id: number){
        return this.http.get(urls.user_get_profile(id), {
            withCredentials: true
        })
    }

    user_follow(id: number) {
        return this.http.put(urls.user_follow(id), {
            withCredentials: true
        })
    }

    user_unfollow(id: number) {
        return this.http.put(urls.user_unfollow(id), {
            withCredentials: true
        })
    }

    user_check_faved(tweet_id: number){
        return this.http.get<any>(urls.user_check_faved(tweet_id), {
            withCredentials: true
        })
    }

}
