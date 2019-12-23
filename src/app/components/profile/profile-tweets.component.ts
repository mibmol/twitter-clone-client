import { Component, OnInit } from '@angular/core';
import { TweetService } from 'src/app/services/tweet.service';
import { ActivatedRoute } from '@angular/router';
import { error } from 'protractor';

@Component({
    selector: 'app-profile-tweets',
    templateUrl: './profile-childs.component.html',
    styleUrls: ['./profile-childs.component.css']
})
export class ProfileTweetsComponent implements OnInit {

    name: string = "tweets"
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
                this.tweetService.user_get_tweets(user_id)
                    .subscribe(
                        res => this.tweets = res,
                        err => console.log(err)
                    )
            }
        )
    }

}
