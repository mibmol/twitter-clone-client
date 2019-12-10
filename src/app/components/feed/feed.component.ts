import { Component, OnInit } from '@angular/core';
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
        this.tweet_service.feed()
            .subscribe(
                response => {
                    this.tweet_service.feed_tweets = response
                },
                error => {
                    console.log(error)
                }
            )
  }




}
