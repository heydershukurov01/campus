import {Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';
declare var google: any;
@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrls: ['./hero.scss', './hero.responsive.scss']
})
export class Hero implements OnInit {
  isMenuOpen = false;
  submenuOpen = false;
  constructor(@Inject(PLATFORM_ID) private platformId: any) {}
  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {

      // @ts-ignore
      window.googleTranslateElementInit = () => {
        // @ts-ignore
        new window.google.translate.TranslateElement({
          pageLanguage: 'en',
          includedLanguages: 'az,en,es,ru',
          // @ts-ignore
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE
        }, 'google_translate_element');
      };

      // Google Translate scriptini yükləyirik
      const script = document.createElement('script');
      script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      document.body.appendChild(script);
    }
  }
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;

  }
  toggleSubmenu() {
    this.submenuOpen = !this.submenuOpen;
  }
}
