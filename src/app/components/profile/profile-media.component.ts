import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-profile-media',
    templateUrl: './profile-childs.component.html',
    styleUrls: ['./profile-childs.component.css']
})
export class ProfileMediaComponent implements OnInit {

    name: string = "media"

    constructor() { }

    ngOnInit() {
    }

}
