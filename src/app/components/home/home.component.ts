import { Component, OnInit } from '@angular/core';
import { TweetService } from 'src/app/services/tweet.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [TweetService]
})
export class HomeComponent implements OnInit {

  constructor(
    private tweet_service: TweetService
  ) {}

  ngOnInit() {
  }

}
