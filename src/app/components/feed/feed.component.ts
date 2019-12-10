import { Component, OnInit } from '@angular/core';
import { TweetService } from 'src/app/services/tweet.service';

@Component({
    selector: 'app-feed',
    templateUrl: './feed.component.html',
    styleUrls: ['./feed.component.css'],
})
export class FeedComponent implements OnInit {

    private feed_tweets: any[] = []

    constructor(
        private tweet_service: TweetService
    ) { }

    ngOnInit() {
        this.tweet_service.feed()
            .subscribe(
                response => {
                    this.feed_tweets = response
                    console.log(this.feed_tweets)
                },
                error => {
                    console.log(error)
                }
            )
  }

}
