import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http'
import {urls} from './endpoints'

@Injectable()
export class TweetService{

    feed_tweets: any[] = []

    constructor(
        private http: HttpClient
    ){}


    feed(){
        return this.http.get<any>(urls.feed, {
            withCredentials: true
        })
    }

    feed_post(tweet: any){
        return this.http.post(urls.feed_post, tweet,{
            withCredentials: true
        })
    }

}