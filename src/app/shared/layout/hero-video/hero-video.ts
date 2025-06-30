import { Component, AfterViewInit } from '@angular/core';
declare var YT: any;
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';
@Component({
  selector: 'app-hero-video',
  imports: [],
  templateUrl: './hero-video.html',
  styleUrls: ['./hero-video.scss', './hero-video.responsive.scss']
})
export class HeroVideo implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      (window as any).onYouTubeIframeAPIReady = () => {
        new YT.Player('player', {
          height: '360',
          width: '640',
          videoId: 'L00wZaW0idE',
          playerVars: {
            autoplay: 1,
            mute: 1,
            playsinline: 1,
            loop: 1,
            playlist: 'L00wZaW0idE'
          },
          events: {
            onReady: (event: any) => {
              console.log('✅ YouTube Player Ready');
              event.target.mute();
              event.target.playVideo();
            }
          }
        });
      };
    }
  }
}
