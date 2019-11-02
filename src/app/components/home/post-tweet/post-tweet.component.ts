import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TweetService } from 'src/app/services/tweet.service';

@Component({
    selector: 'app-post-tweet',
    templateUrl: './post-tweet.component.html',
    styleUrls: ['./post-tweet.component.css'],
})
export class PostTweetComponent implements OnInit {

    text_input: string = '';
    enabled: boolean = true

    @ViewChild('indicator', { static: true })
    private indicator_canvas: ElementRef<HTMLCanvasElement>
    private ctx: CanvasRenderingContext2D



    constructor(
        private tweet_service: TweetService
    ) { }


    ngOnInit() {
        this.ctx = this.indicator_canvas.nativeElement.getContext('2d')
        this.ctx.lineWidth = 3
        this.update_indicator()

    }

    post_tweet() {
        this.enabled = false
        this.tweet_service.post_tweet({
            text: this.text_input
        }).subscribe(
            r => {
                this.text_input = ""
                this.enabled = true
            },
            error => {
                this.text_input = ""
                this.enabled = true
            }
        )
    }


    update_indicator() {

        if (this.text_input.length >= 240) {
            this.text_input = this.text_input.substring(0, 240)
            return
        }

        this.ctx.clearRect(
            0,
            0,
            this.indicator_canvas.nativeElement.width,
            this.indicator_canvas.nativeElement.height
        );
        this.draw_background()
        this.draw_status()
    }


    draw_background() {
        this.ctx.beginPath();
        this.ctx.strokeStyle = "rgb(110, 110, 110, 0.4)";
        this.ctx.arc(14, 14, 12, 0, Math.PI * 2, true);
        this.ctx.stroke();
    }


    draw_status() {
        this.ctx.beginPath()
        this.ctx.strokeStyle = "rgb(29, 161, 242)";

        let start = 0 - Math.PI / 2
        let end = (this.text_input.length / 240) * Math.PI * 2 - Math.PI / 2
        let counter_clock_wise = false

        this.ctx.arc(14, 14, 12, start, end, counter_clock_wise)
        this.ctx.stroke()
    }

}
