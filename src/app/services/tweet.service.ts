import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http'
import { urls } from './endpoints'

@Injectable()
export class TweetService {

    feed_tweets: any[] = []

    constructor(
        private http: HttpClient
    ) { }


    feed(older: boolean) {

        var request;

        if (older) {
            let params = new HttpParams()
                .set("bottom_tweet_id", this.feed_tweets[this.feed_tweets.length - 1].id)
            request = this.http.get<any>(urls.feed, {
                withCredentials: true,
                params
            })
        }
        else {
            request = this.http.get<any>(urls.feed, {
                withCredentials: true
            })
        }


        return request
    }

    feed_new() {
        return this.http.get<any>(urls.feed_new, {
            withCredentials: true,
            params: {
                top_tweet_id: this.feed_tweets[0].id
            }
        })
    }

    feed_post(tweet: any) {
        return this.http.post(urls.feed_post, tweet, {
            withCredentials: true
        })
    }

    tweet_fav(tweet: any) {
        return this.http.put(urls.tweet_fav(tweet.id), {}, {
            withCredentials: true
        })
    }

    tweet_unfav(tweet: any) {
        return this.http.put(urls.tweet_unfav(tweet.id), {}, {
            withCredentials: true
        })
    }


    add_new_tweets(tweets: any[]) {
        this.feed_tweets.unshift(tweets)
    }
    add_older_tweets(tweets: any[]) {
        this.feed_tweets.push(...tweets)
    }
}