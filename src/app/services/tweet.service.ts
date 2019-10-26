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
    }

    load_tweets(){
        this._feed_tweets.push({
            text: "fake tweet"
        })
    }



    get feed_tweets(){
        return this._feed_tweets
    }

}