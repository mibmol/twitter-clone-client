import { Component, OnInit, Input } from '@angular/core';
import { TweetService } from 'src/app/services/tweet.service';
import { UserService } from 'src/app/services/user.service';

@Component({
    selector: 'app-tweet',
    templateUrl: './tweet.component.html',
    styleUrls: ['./tweet.component.css']
})
export class TweetComponent implements OnInit {
    months = ["Janu", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    @Input() tweet: any
    faved: boolean = false;
    retweeted: boolean = false;

    constructor(
        private tweetService: TweetService,
        private userService: UserService
    ) {}

    ngOnInit() {
        this.userService.user_check_faved(this.tweet.id)
            .subscribe(
                res => this.faved = res.faved,
                err => console.log(err)
            )
    }

    my(): string {

        let date = new Date(this.tweet.timestamp)

        return `${this.months[date.getMonth()]} ${date.getDay()}`
    }

    fav() {
        if (!this.faved) {
            this.tweetService.tweet_fav(this.tweet)
                .subscribe(
                    res => {
                        this.faved = true
                    },
                    error => {
                        console.log(error)
                        this.faved = false
                    }
                )
        }
        else {
            this.tweetService.tweet_unfav(this.tweet)
                .subscribe(
                    res => {
                        this.faved = false
                    },
                    error => {
                        console.log(error)
                        this.faved = true
                    }
                )
        }

    }

}
