import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http'

@Injectable()
export class TweetService{
    private _feed_tweets: any[] = []

    constructor(
        private http: HttpClient
    ){}

    post_tweet(tweet: any){
        this._feed_tweets.push(tweet)
        return this.http.post("", {})
    }

    load_tweets(){
    }



    get feed_tweets(){
        return this._feed_tweets
    }

}