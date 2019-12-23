import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TweetComponent } from './components/tweet/tweet.component';
import { FeedComponent } from './components/feed/feed.component';
import { PostTweetComponent } from './components/post-tweet/post-tweet.component';
import { OptionsComponent } from './components/options/options.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfileTweetsComponent } from './components/profile/profile-tweets.component';
import { ProfileTweetsRepliesComponent } from './components/profile/profile-tweets-replies.component';
import { ProfileLikesComponent } from './components/profile/profile-likes.component';
import { ProfileMediaComponent } from './components/profile/profile-media.component';

@NgModule({
  declarations: [
    AppComponent,
    TweetComponent,
    FeedComponent,
    PostTweetComponent,
    OptionsComponent,
    NotificationsComponent,
    HomeComponent,
    ProfileComponent,
    ProfileTweetsComponent,
    ProfileTweetsRepliesComponent,
    ProfileLikesComponent,
    ProfileMediaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
