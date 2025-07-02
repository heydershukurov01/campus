import {AfterViewInit, ChangeDetectorRef, Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';
declare var google: any;
declare global {
  interface Window {
    googleTranslateElementInit: () => void;
    google: any;
  }
}
@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrls: ['./hero.scss', './hero.responsive.scss']
})
export class Hero implements OnInit, AfterViewInit {
  isMenuOpen = false;
  submenuOpen = false;
  /** Hazırkı aktiv dil kodu (az, en, es, ru) */
  currentLang = 'az';
  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
    private cdRef: ChangeDetectorRef

  ) {}
  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        this.injectGoogleTranslate();
        /* İlk dəfə səhifə açılarkən kukidən oxu */
        this.currentLang = this.getGoogleTransLang();
        this.setLangClass(this.currentLang);
      }, 500);
    }
  }
  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      setInterval(() => {
        const langNow = this.getGoogleTransLang();
        if (langNow !== this.currentLang) {
          this.currentLang = langNow;
          this.setLangClass(langNow);
          this.cdRef.detectChanges(); // daha effektlidir
          console.log('[LANG CHANGE]', langNow);
        }
      }, 1000); // H
    }
  }
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;

  }
  toggleSubmenu() {
    this.submenuOpen = !this.submenuOpen;
  }
  private injectGoogleTranslate(): void {
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'az',
          includedLanguages: 'az,en,es,ru',
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE
        },
        'google_translate_element'
      );

      // 🟢 Tərcüməni zorla tətbiq et (refresh sonrası)
      setTimeout(() => {
        const activeLang = this.getGoogleTransLang();
        const selectEl = document.querySelector('select.goog-te-combo') as HTMLSelectElement;
        if (selectEl && activeLang) {
          selectEl.value = activeLang;
          selectEl.dispatchEvent(new Event('change'));
          console.log('[Translate Forced]', activeLang);
        }
      }, 1500); // 🕒 Google scripti bitirsin deyə
    };

    const script = document.createElement('script');
    script.src =
      'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    document.body.appendChild(script);
  }

  /* ======== 4. “googtrans” kukisindən hazırkı dili oxu ======== */
  private getGoogleTransLang(): string {
    const cookie = document.cookie
      .split('; ')
      .find(c => c.startsWith('googtrans='));
    if (!cookie) { return 'az'; }                  // default
    const parts = cookie.split('/');
    return parts.at(-1) || 'az';                   // son hissə aktiv dil
  }
  private setLangClass(code: string): void {
    const widget = document.querySelector('#google_translate_element') as HTMLElement;
    if (!widget) return;

    const langs = ['az', 'en', 'es', 'ru'];
    langs.forEach(lang => widget.classList.remove(`lang-${lang}`));
    widget.classList.add(`lang-${code}`);
  }
  /* ======== 5. Şablonda bayraq göstərmək üçün köməkçi ======== */
  getFlagEmoji(lang: string): string {
    switch (lang) {
      case 'az': return '🇦🇿';
      case 'en': return '🇬🇧';
      case 'es': return '🇪🇸';
      case 'ru': return '🇷🇺';
      default  : return '🌐';
    }
  }
}
