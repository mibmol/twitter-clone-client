import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TweetService } from 'src/app/services/tweet.service';

@Component({
    selector: 'app-profile-tweets-replies',
    templateUrl: './profile-childs.component.html',
    styleUrls: ['./profile-childs.component.css']
})
export class ProfileTweetsRepliesComponent implements OnInit {

    name: string = "with-replies"
    tweets: any[]

    constructor(
        private tweetService: TweetService,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.load_tweets()
    }

    load_tweets(){
        this.route.parent.params.subscribe(
            params => {
                let user_id =+ params['user_id']
                this.tweetService.user_get_tweets_replies(user_id)
                    .subscribe(
                        res => this.tweets = res,
                        err => console.log(err)
                    )
            }
        )
    }

}
