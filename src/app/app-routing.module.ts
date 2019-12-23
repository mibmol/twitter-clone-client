import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotificationsComponent } from './components/notifications/notifications.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfileTweetsComponent } from './components/profile/profile-tweets.component';
import { ProfileTweetsRepliesComponent } from './components/profile/profile-tweets-replies.component';
import { ProfileLikesComponent } from './components/profile/profile-likes.component';
import { ProfileMediaComponent } from './components/profile/profile-media.component';


const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'notifications',
        component: NotificationsComponent
    },
    {
        path: 'profile/:user_id',
        component: ProfileComponent,
        children: [
            { path: '', redirectTo: 'tweets', pathMatch: 'full'},
            { path: 'tweets', component: ProfileTweetsComponent },
            { path: 'with-replies', component: ProfileTweetsRepliesComponent },
            { path: 'likes', component: ProfileLikesComponent },
            { path: 'media', component: ProfileMediaComponent}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
