import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeedComponent } from './options/home/feed/feed.component';
import { NotificationsComponent } from './options/notifications/notifications.component';


const routes: Routes = [
    {path: 'feed', component: FeedComponent},
    {path: 'notifications', component: NotificationsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
