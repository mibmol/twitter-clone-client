import { Component, OnInit, HostListener } from '@angular/core';
import { TweetService } from 'src/app/services/tweet.service';

@Component({
    selector: 'app-feed',
    templateUrl: './feed.component.html',
    styleUrls: ['./feed.component.css'],
})
export class FeedComponent implements OnInit {


    constructor(
        private tweet_service: TweetService
    ) { }

    ngOnInit() {
 
        this.tweet_service.feed(false)
            .subscribe(
                response => {
                    this.tweet_service.feed_tweets = response
                },
                error => {
                    console.log(error)
                }
            )
    }


    @HostListener("window:scroll", [])
    on_reach_bottom(){
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            this.tweet_service.feed(true)
                .subscribe(
                    res => {
                        this.tweet_service.add_older_tweets(res)
                    },
                    err => console.log(err)
                )
        }
    }

    get_tweets_feed(){
        return this.tweet_service.feed_tweets
    }


}
