import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TweetComponent } from './tweet/tweet.component';
import { FeedComponent } from './options/home/feed/feed.component';
import { PostTweetComponent } from './options/home/post-tweet/post-tweet.component';
import { OptionsComponent } from './options/options.component';
import { NotificationsComponent } from './options/notifications/notifications.component';
import { HomeComponent } from './options/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    TweetComponent,
    FeedComponent,
    PostTweetComponent,
    OptionsComponent,
    NotificationsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
