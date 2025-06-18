import './polyfills.server.mjs';
import {
  CommonModule,
  Component,
  Inject,
  NgModule,
  PLATFORM_ID,
  RouterModule,
  isPlatformBrowser,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵtext
} from "./chunk-MJ74XPEF.mjs";
import "./chunk-DTEGX4RB.mjs";

// src/app/shared/layout/header/header.ts
var Header = class _Header {
  static \u0275fac = function Header_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Header)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Header, selectors: [["app-header"]], decls: 29, vars: 0, consts: [[1, "logo"], [1, "special", 2, "padding-left", "3px"], ["src", "assets/images/main-venue-icono-topbar.webp", "alt", "Flag of Spain"], [1, "private"], [1, "contact"], ["href", "mailto:heydar.shukurov@gmail.com"], ["src", "assets/images/email.webp", "alt", "send email button"], ["href", "tel:+994512356130"], ["src", "assets/images/call.webp", "alt", "Call button"], [1, "socials"], ["href", ""], [1, "fa-brands", "fa-facebook-f"], [1, "fa-brands", "fa-twitter"], [1, "fa-brands", "fa-instagram"], [1, "fa-brands", "fa-youtube"], [1, "fa-brands", "fa-linkedin"], [1, "fa-brands", "fa-tiktok"], [1, "button"]], template: function Header_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "header")(1, "div")(2, "div", 0);
      \u0275\u0275text(3, " Campus Experience ");
      \u0275\u0275elementStart(4, "span", 1);
      \u0275\u0275text(5, " Madrid");
      \u0275\u0275elementEnd();
      \u0275\u0275element(6, "img", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div", 3);
      \u0275\u0275text(8, " Private Area ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div", 4)(10, "a", 5);
      \u0275\u0275element(11, "img", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "a", 7);
      \u0275\u0275element(13, "img", 8);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "div", 9)(15, "a", 10);
      \u0275\u0275element(16, "i", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "a", 10);
      \u0275\u0275element(18, "i", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "a", 10);
      \u0275\u0275element(20, "i", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "a", 10);
      \u0275\u0275element(22, "i", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "a", 10);
      \u0275\u0275element(24, "i", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "a", 10);
      \u0275\u0275element(26, "i", 16);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(27, "button", 17);
      \u0275\u0275text(28, " REGISTER NOW! ");
      \u0275\u0275elementEnd()();
    }
  }, styles: ["\n\nheader[_ngcontent-%COMP%] {\n  height: 96px;\n  width: 100%;\n  display: flex;\n  padding: 0 20px;\n  align-items: center;\n  justify-content: center;\n  background: #f9f9f9;\n}\nheader[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  padding: 4.8px 16px 4.8px 11.2px;\n  font-family:\n    Raleway,\n    Helvetica,\n    Arial,\n    sans-serif;\n  font-size: 13px;\n}\nheader[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   div.logo[_ngcontent-%COMP%] {\n  padding: 7px 9px;\n}\nheader[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   div.logo[_ngcontent-%COMP%]   .special[_ngcontent-%COMP%] {\n  font-family:\n    Raleway,\n    Helvetica,\n    Arial,\n    sans-serif;\n  font-size: 13px;\n  color: #af8542;\n}\nheader[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   div.private[_ngcontent-%COMP%] {\n  font-family:\n    Raleway,\n    Helvetica,\n    Arial,\n    sans-serif;\n  font-size: 14px;\n  color: #af8542;\n  font-weight: 700;\n  padding: 7px 9px;\n  margin: 0 15px;\n}\nheader[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   div.contact[_ngcontent-%COMP%] {\n  font-family:\n    Raleway,\n    Helvetica,\n    Arial,\n    sans-serif;\n  font-size: 14px;\n  padding: 7px 9px;\n  margin: 0 15px;\n}\nheader[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   div.socials[_ngcontent-%COMP%] {\n  font-size: 14px;\n  padding: 7px 9px;\n  margin: 0 15px;\n}\nheader[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   div.socials[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 20px;\n  color: #c2c2c2 !important;\n}\nheader[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 6px 30px;\n  background: #af8542;\n  color: #fff;\n  font-family:\n    Open Sans,\n    Helvetica,\n    Arial,\n    sans-serif;\n  font-size: 12px;\n  border: none;\n  font-weight: 600;\n  border-radius: 4px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=header.css.map */", "\n\n@media (max-width: 480px) {\n  header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    height: auto;\n    padding: 10px;\n  }\n  header[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    justify-content: center;\n  }\n  header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    margin-top: 10px;\n    width: 100%;\n  }\n}\n@media (min-width: 481px) and (max-width: 1024px) {\n  header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    height: auto;\n  }\n  header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    margin-top: 10px;\n  }\n}\n/*# sourceMappingURL=header.responsive.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Header, [{
    type: Component,
    args: [{ selector: "app-header", imports: [], template: '<header>\n  <div>\n    <div class="logo">\n      Campus Experience <span class="special" style="padding-left: 3px"> Madrid</span>\n      <img src="assets/images/main-venue-icono-topbar.webp" alt="Flag of Spain">\n    </div>\n    <div class="private">\n      Private Area\n    </div>\n    <div class="contact">\n      <a href="mailto:heydar.shukurov@gmail.com">\n        <img src="assets/images/email.webp" alt="send email button">\n      </a>\n      <a href="tel:+994512356130">\n        <img src="assets/images/call.webp" alt="Call button">\n      </a>\n    </div>\n    <div class="socials">\n      <a href="">\n        <i class="fa-brands fa-facebook-f"></i>\n      </a>\n      <a href="">\n        <i class="fa-brands fa-twitter"></i>\n      </a>\n      <a href="">\n        <i class="fa-brands fa-instagram"></i>\n      </a>\n      <a href="">\n        <i class="fa-brands fa-youtube"></i>\n      </a>\n      <a href="">\n        <i class="fa-brands fa-linkedin"></i>\n      </a>\n      <a href="">\n        <i class="fa-brands fa-tiktok"></i>\n      </a>\n    </div>\n  </div>\n  <button class="button">\n    REGISTER NOW!\n  </button>\n</header>\n', styles: ["/* src/app/shared/layout/header/header.scss */\nheader {\n  height: 96px;\n  width: 100%;\n  display: flex;\n  padding: 0 20px;\n  align-items: center;\n  justify-content: center;\n  background: #f9f9f9;\n}\nheader div {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  padding: 4.8px 16px 4.8px 11.2px;\n  font-family:\n    Raleway,\n    Helvetica,\n    Arial,\n    sans-serif;\n  font-size: 13px;\n}\nheader div div.logo {\n  padding: 7px 9px;\n}\nheader div div.logo .special {\n  font-family:\n    Raleway,\n    Helvetica,\n    Arial,\n    sans-serif;\n  font-size: 13px;\n  color: #af8542;\n}\nheader div div.private {\n  font-family:\n    Raleway,\n    Helvetica,\n    Arial,\n    sans-serif;\n  font-size: 14px;\n  color: #af8542;\n  font-weight: 700;\n  padding: 7px 9px;\n  margin: 0 15px;\n}\nheader div div.contact {\n  font-family:\n    Raleway,\n    Helvetica,\n    Arial,\n    sans-serif;\n  font-size: 14px;\n  padding: 7px 9px;\n  margin: 0 15px;\n}\nheader div div.socials {\n  font-size: 14px;\n  padding: 7px 9px;\n  margin: 0 15px;\n}\nheader div div.socials i {\n  margin-right: 20px;\n  color: #c2c2c2 !important;\n}\nheader button {\n  padding: 6px 30px;\n  background: #af8542;\n  color: #fff;\n  font-family:\n    Open Sans,\n    Helvetica,\n    Arial,\n    sans-serif;\n  font-size: 12px;\n  border: none;\n  font-weight: 600;\n  border-radius: 4px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=header.css.map */\n", "/* src/app/shared/layout/header/header.responsive.scss */\n@media (max-width: 480px) {\n  header {\n    flex-direction: column;\n    height: auto;\n    padding: 10px;\n  }\n  header div {\n    flex-wrap: wrap;\n    justify-content: center;\n  }\n  header button {\n    margin-top: 10px;\n    width: 100%;\n  }\n}\n@media (min-width: 481px) and (max-width: 1024px) {\n  header {\n    flex-direction: column;\n    height: auto;\n  }\n  header button {\n    margin-top: 10px;\n  }\n}\n/*# sourceMappingURL=header.responsive.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Header, { className: "Header", filePath: "src/app/shared/layout/header/header.ts", lineNumber: 9 });
})();

// src/app/shared/layout/hero/hero.ts
var Hero = class _Hero {
  isMenuOpen = false;
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  static \u0275fac = function Hero_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Hero)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Hero, selectors: [["app-hero"]], decls: 21, vars: 2, consts: [["href", ""], ["src", "assets/images/logo.webp", "alt", "Logo"], [1, "hamburger", 3, "click"], [1, "fa", "fa-bars"], [1, "menu"], ["href", "#"]], template: function Hero_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "nav")(1, "section")(2, "div")(3, "a", 0);
      \u0275\u0275element(4, "img", 1);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "button", 2);
      \u0275\u0275listener("click", function Hero_Template_button_click_5_listener() {
        return ctx.toggleMenu();
      });
      \u0275\u0275element(6, "i", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div", 4)(8, "ul")(9, "li")(10, "a", 5);
      \u0275\u0275text(11, "Home");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "li")(13, "a", 5);
      \u0275\u0275text(14, "Campus Experience");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "li")(16, "a", 5);
      \u0275\u0275text(17, "Programmes");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "li")(19, "a", 5);
      \u0275\u0275text(20, "Location 2025");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275classProp("open", ctx.isMenuOpen);
    }
  }, styles: ["\n\nnav[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nnav[_ngcontent-%COMP%]   section[_ngcontent-%COMP%] {\n  width: 65%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\nnav[_ngcontent-%COMP%]   .hamburger[_ngcontent-%COMP%] {\n  display: none;\n}\nnav[_ngcontent-%COMP%]   div.menu[_ngcontent-%COMP%] {\n  display: flex;\n}\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  height: 110px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0;\n}\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  list-style: none;\n  height: 100%;\n  margin: 0 16px;\n  transition: 200ms;\n}\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  border-bottom: 2px solid #8c8c8c;\n}\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  font-size: 14px;\n  color: #8c8c8c !important;\n  cursor: pointer;\n}\n/*# sourceMappingURL=hero.css.map */", "\n\n@media (max-width: 768px) {\n  nav[_ngcontent-%COMP%]   section[_ngcontent-%COMP%] {\n    width: 90%;\n    flex-direction: column;\n    position: relative;\n  }\n  .hamburger[_ngcontent-%COMP%] {\n    display: block;\n    background: transparent;\n    border: none;\n    font-size: 24px;\n    cursor: pointer;\n  }\n  nav[_ngcontent-%COMP%]   div.menu[_ngcontent-%COMP%] {\n    display: none;\n    width: 100%;\n  }\n  nav[_ngcontent-%COMP%]   div.menu.open[_ngcontent-%COMP%] {\n    display: block;\n  }\n  nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    flex-direction: column;\n    flex-wrap: wrap;\n    height: auto;\n    padding: 0;\n  }\n  nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    margin: 8px 0;\n  }\n  nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n@media (min-width: 769px) and (max-width: 1024px) {\n  nav[_ngcontent-%COMP%]   section[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n}\n/*# sourceMappingURL=hero.responsive.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Hero, [{
    type: Component,
    args: [{ selector: "app-hero", imports: [], template: '<nav>\n <section>\n   <div>\n     <a href="">\n       <img src="assets/images/logo.webp" alt="Logo">\n     </a>\n   </div>\n  <button class="hamburger" (click)="toggleMenu()">\n    <i class="fa fa-bars"></i>\n  </button>\n  <div class="menu" [class.open]="isMenuOpen">\n    <ul>\n      <li>\n        <a href="#">Home</a>\n      </li>\n      <li>\n        <a href="#">Campus Experience</a>\n      </li>\n      <li>\n        <a href="#">Programmes</a>\n      </li>\n      <li><a href="#">Location 2025</a></li>\n    </ul>\n  </div>\n </section>\n</nav>\n', styles: ["/* src/app/shared/layout/hero/hero.scss */\nnav {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nnav section {\n  width: 65%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\nnav .hamburger {\n  display: none;\n}\nnav div.menu {\n  display: flex;\n}\nnav ul {\n  height: 110px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0;\n}\nnav ul li {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  list-style: none;\n  height: 100%;\n  margin: 0 16px;\n  transition: 200ms;\n}\nnav ul li:hover {\n  border-bottom: 2px solid #8c8c8c;\n}\nnav ul li a {\n  text-decoration: none;\n  font-size: 14px;\n  color: #8c8c8c !important;\n  cursor: pointer;\n}\n/*# sourceMappingURL=hero.css.map */\n", "/* src/app/shared/layout/hero/hero.responsive.scss */\n@media (max-width: 768px) {\n  nav section {\n    width: 90%;\n    flex-direction: column;\n    position: relative;\n  }\n  .hamburger {\n    display: block;\n    background: transparent;\n    border: none;\n    font-size: 24px;\n    cursor: pointer;\n  }\n  nav div.menu {\n    display: none;\n    width: 100%;\n  }\n  nav div.menu.open {\n    display: block;\n  }\n  nav ul {\n    flex-direction: column;\n    flex-wrap: wrap;\n    height: auto;\n    padding: 0;\n  }\n  nav ul li {\n    margin: 8px 0;\n  }\n  nav ul li a {\n    font-size: 14px;\n  }\n}\n@media (min-width: 769px) and (max-width: 1024px) {\n  nav section {\n    width: 80%;\n  }\n}\n/*# sourceMappingURL=hero.responsive.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Hero, { className: "Hero", filePath: "src/app/shared/layout/hero/hero.ts", lineNumber: 9 });
})();

// src/app/shared/layout/hero-video/hero-video.ts
var HeroVideo = class _HeroVideo {
  platformId;
  constructor(platformId) {
    this.platformId = platformId;
  }
  ngAfterViewInit() {
    console.log("Helo from the other side");
    if (isPlatformBrowser(this.platformId)) {
      console.log("Hello");
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      document.body.appendChild(tag);
      window.onYouTubeIframeAPIReady = () => {
        new YT.Player("player", {
          height: "360",
          width: "640",
          videoId: "L00wZaW0idE",
          playerVars: {
            autoplay: 1,
            mute: 1,
            playsinline: 1,
            loop: 1,
            playlist: "L00wZaW0idE"
          },
          events: {
            onReady: (event) => {
              console.log("\u2705 YouTube Player Ready");
              event.target.mute();
              event.target.playVideo();
            }
          }
        });
      };
    }
  }
  static \u0275fac = function HeroVideo_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HeroVideo)(\u0275\u0275directiveInject(PLATFORM_ID));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HeroVideo, selectors: [["app-hero-video"]], decls: 2, vars: 0, consts: [["id", "player"]], template: function HeroVideo_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section");
      \u0275\u0275element(1, "div", 0);
      \u0275\u0275elementEnd();
    }
  }, styles: ["\n\n  iframe {\n  width: 100%;\n  height: 56.25vw;\n  max-height: 900px;\n  margin: 0;\n}\n/*# sourceMappingURL=hero-video.css.map */", "\n\n@media (min-width: 1920px) {\n    iframe {\n    max-height: 1080px;\n  }\n}\n/*# sourceMappingURL=hero-video.responsive.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HeroVideo, [{
    type: Component,
    args: [{ selector: "app-hero-video", imports: [], template: '\n<section>\n  <div id="player"></div>\n</section>\n', styles: ["/* src/app/shared/layout/hero-video/hero-video.scss */\n::ng-deep iframe {\n  width: 100%;\n  height: 56.25vw;\n  max-height: 900px;\n  margin: 0;\n}\n/*# sourceMappingURL=hero-video.css.map */\n", "/* src/app/shared/layout/hero-video/hero-video.responsive.scss */\n@media (min-width: 1920px) {\n  ::ng-deep iframe {\n    max-height: 1080px;\n  }\n}\n/*# sourceMappingURL=hero-video.responsive.css.map */\n"] }]
  }], () => [{ type: Object, decorators: [{
    type: Inject,
    args: [PLATFORM_ID]
  }] }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HeroVideo, { className: "HeroVideo", filePath: "src/app/shared/layout/hero-video/hero-video.ts", lineNumber: 11 });
})();

// src/app/home/components/intro/intro.ts
var Intro = class _Intro {
  static \u0275fac = function Intro_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Intro)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Intro, selectors: [["app-intro"]], standalone: false, decls: 10, vars: 0, consts: [[1, "intro"], ["src", "https://campusexperiencermf.com/wp-content/uploads/2023/11/IN-Valores-CE-2024-mini.png", "alt", "Values"]], template: function Intro_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div")(2, "h1");
      \u0275\u0275text(3, "What is Campus Experience?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div")(5, "p");
      \u0275\u0275text(6, " Campus Experience is a Real Madrid Foundation project that offers the chance to experience life as part of a team, and to find out about and share in the values of Madridismo. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "h5");
      \u0275\u0275text(8, "LEARNING VALUES THROUGH FOOTBALL");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(9, "img", 1);
      \u0275\u0275elementEnd();
    }
  }, styles: ["\n\n.intro[_ngcontent-%COMP%] {\n  padding: 90px 0rem;\n  text-align: center;\n  display: flex;\n  width: 70%;\n  margin: auto;\n}\n.intro[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n}\n.intro[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 36px;\n  font-family:\n    Raleway,\n    Helvetica,\n    sans-serif;\n  color: #363636;\n  margin-bottom: 1rem;\n}\n.intro[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 80%;\n  margin: 0 auto 1rem;\n  margin-left: 0;\n  font-family:\n    Raleway,\n    Helvetica,\n    sans-serif;\n  font-size: 16px;\n  color: #8c8c8c;\n  text-align: justify;\n  letter-spacing: 0.5px;\n  line-height: 1.4em;\n}\n.intro[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 510px;\n  height: auto;\n}\n.intro[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-family:\n    Raleway,\n    Helvetica,\n    sans-serif;\n  color: #af8542;\n  font-size: 25.6px;\n  font-style: italic;\n  margin-top: 0;\n}\n/*# sourceMappingURL=intro.css.map */", "\n\n@media (max-width: 768px) {\n  .intro[_ngcontent-%COMP%] {\n    width: 90%;\n    flex-direction: column;\n    padding: 40px 0;\n  }\n  .intro[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    align-items: center;\n  }\n  .intro[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    max-width: 100%;\n    text-align: center;\n  }\n  .intro[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-width: 100%;\n    margin-top: 20px;\n  }\n}\n@media (min-width: 769px) and (max-width: 1024px) {\n  .intro[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n}\n/*# sourceMappingURL=intro.responsive.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Intro, [{
    type: Component,
    args: [{ selector: "app-intro", standalone: false, template: '<section class="intro">\n  <div>\n    <h1>What is Campus Experience?</h1>\n    <div>\n      <p>\n        Campus Experience is a Real Madrid Foundation project that offers the chance to experience life as part of a team, and to find out about and share in the values of Madridismo.\n      </p>\n    </div>\n    <h5>LEARNING VALUES THROUGH FOOTBALL</h5>\n  </div>\n  <img src="https://campusexperiencermf.com/wp-content/uploads/2023/11/IN-Valores-CE-2024-mini.png" alt="Values" />\n</section>\n', styles: ["/* src/app/home/components/intro/intro.scss */\n.intro {\n  padding: 90px 0rem;\n  text-align: center;\n  display: flex;\n  width: 70%;\n  margin: auto;\n}\n.intro div {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n}\n.intro h1 {\n  font-size: 36px;\n  font-family:\n    Raleway,\n    Helvetica,\n    sans-serif;\n  color: #363636;\n  margin-bottom: 1rem;\n}\n.intro p {\n  max-width: 80%;\n  margin: 0 auto 1rem;\n  margin-left: 0;\n  font-family:\n    Raleway,\n    Helvetica,\n    sans-serif;\n  font-size: 16px;\n  color: #8c8c8c;\n  text-align: justify;\n  letter-spacing: 0.5px;\n  line-height: 1.4em;\n}\n.intro img {\n  max-width: 510px;\n  height: auto;\n}\n.intro h5 {\n  font-family:\n    Raleway,\n    Helvetica,\n    sans-serif;\n  color: #af8542;\n  font-size: 25.6px;\n  font-style: italic;\n  margin-top: 0;\n}\n/*# sourceMappingURL=intro.css.map */\n", "/* src/app/home/components/intro/intro.responsive.scss */\n@media (max-width: 768px) {\n  .intro {\n    width: 90%;\n    flex-direction: column;\n    padding: 40px 0;\n  }\n  .intro div {\n    align-items: center;\n  }\n  .intro p {\n    max-width: 100%;\n    text-align: center;\n  }\n  .intro img {\n    max-width: 100%;\n    margin-top: 20px;\n  }\n}\n@media (min-width: 769px) and (max-width: 1024px) {\n  .intro {\n    width: 80%;\n  }\n}\n/*# sourceMappingURL=intro.responsive.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Intro, { className: "Intro", filePath: "src/app/home/components/intro/intro.ts", lineNumber: 9 });
})();

// src/app/home/components/programmes/programmes.ts
var Programmes = class _Programmes {
  static \u0275fac = function Programmes_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Programmes)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Programmes, selectors: [["app-programmes"]], standalone: false, decls: 107, vars: 0, consts: [["id", "programmes-section"], [1, "programmes"], [1, "programme-list"], [1, "programme"], ["src", "https://campusexperiencermf.com/wp-content/uploads/2023/02/principal-CE.jpg", "alt", "Campus Experience"], [1, "programme-desc"], ["href", "https://campusexperiencermf.com/en/campus-experience/", 1, "detailed"], [1, "fa", "fa-chevron-right"], ["href", "https://campusexperiencermf.com/en/registration/", 1, "btn"], ["src", "https://campusexperiencermf.com/wp-content/uploads/2024/11/GMG01808-1024x575.jpg", "alt", "Goalkeepers"], ["href", "https://campusexperiencermf.com/en/campus-experience-goalkeepers/", 1, "detailed"], ["src", "https://campusexperiencermf.com/wp-content/uploads/2024/03/programa-campus-experience-max.jpg", "alt", "MAX"], ["href", "https://campusexperiencermf.com/en/campus-experience-max/", 1, "detailed"], ["src", "https://campusexperiencermf.com/wp-content/uploads/2023/11/campus-max-femenino.jpg", "alt", "MAX FEM"], ["href", "https://campusexperiencermf.com/en/campus-experience-max-fem/", 1, "detailed"], ["src", "https://campusexperiencermf.com/wp-content/uploads/2024/11/GMG00579-1024x575.jpg", "alt", "MAX Goalkeepers"], ["href", "https://campusexperiencermf.com/en/campus-experience-max-goalkeepers/", 1, "detailed"], ["src", "https://campusexperiencermf.com/wp-content/uploads/2024/11/92d7db3c-3669-45b3-8ce6-4e2cb4c5bae9-1024x580.jpg", "alt", "Language Immersion in English"], ["href", "https://campusexperiencermf.com/en/campus-experience-english-language-immersion/", 1, "detailed"], ["src", "https://campusexperiencermf.com/wp-content/uploads/2024/11/b0d0b236-70a6-4632-9c74-058a7f68cfd3-1024x580.jpg", "alt", "Football & Responsible Gaming"], ["href", "https://campusexperiencermf.com/en/campus-experience-football-and-responsible-gaming/", 1, "detailed"]], template: function Programmes_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "h2");
      \u0275\u0275text(3, "Programmes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 2)(5, "article", 3);
      \u0275\u0275element(6, "img", 4);
      \u0275\u0275elementStart(7, "h3");
      \u0275\u0275text(8, "Campus ");
      \u0275\u0275element(9, "br");
      \u0275\u0275text(10, " Experience");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "p", 5);
      \u0275\u0275text(12, "The football camp ");
      \u0275\u0275elementStart(13, "strong");
      \u0275\u0275text(14, "for everyone");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "a", 6);
      \u0275\u0275element(16, "i", 7);
      \u0275\u0275text(17, " See details");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "a", 8);
      \u0275\u0275text(19, "Register ");
      \u0275\u0275element(20, "i", 7);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "article", 3);
      \u0275\u0275element(22, "img", 9);
      \u0275\u0275elementStart(23, "h3");
      \u0275\u0275text(24, "Campus Experience Goalkeepers");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "p", 5);
      \u0275\u0275text(26, "Football camp ");
      \u0275\u0275elementStart(27, "strong");
      \u0275\u0275text(28, "for goalkeepers");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(29, "a", 10);
      \u0275\u0275element(30, "i", 7);
      \u0275\u0275text(31, " See details");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "a", 8);
      \u0275\u0275text(33, "Register ");
      \u0275\u0275element(34, "i", 7);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(35, "article", 3);
      \u0275\u0275element(36, "img", 11);
      \u0275\u0275elementStart(37, "h3");
      \u0275\u0275text(38, "Campus Experience MAX");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "p", 5);
      \u0275\u0275text(40, "Football camp ");
      \u0275\u0275elementStart(41, "strong");
      \u0275\u0275text(42, "High-skill level");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(43, "a", 12);
      \u0275\u0275element(44, "i", 7);
      \u0275\u0275text(45, " See details");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "a", 8);
      \u0275\u0275text(47, "Register ");
      \u0275\u0275element(48, "i", 7);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(49, "article", 3);
      \u0275\u0275element(50, "img", 13);
      \u0275\u0275elementStart(51, "h3");
      \u0275\u0275text(52, "Campus Experience MAX FEM");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "p", 5);
      \u0275\u0275text(54, "Football campus ");
      \u0275\u0275elementStart(55, "strong");
      \u0275\u0275text(56, "for her");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(57, "a", 14);
      \u0275\u0275element(58, "i", 7);
      \u0275\u0275text(59, " See details ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "a", 8);
      \u0275\u0275text(61, " Register ");
      \u0275\u0275element(62, "i", 7);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(63, "article", 3);
      \u0275\u0275element(64, "img", 15);
      \u0275\u0275elementStart(65, "h3");
      \u0275\u0275text(66, "Campus Experience MAX Goalkeepers");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "p", 5)(68, "strong");
      \u0275\u0275text(69, "High-skill level");
      \u0275\u0275elementEnd();
      \u0275\u0275text(70, " football camp ");
      \u0275\u0275elementStart(71, "strong");
      \u0275\u0275text(72, "for goalkeepers");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(73, "a", 16);
      \u0275\u0275element(74, "i", 7);
      \u0275\u0275text(75, " See details ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "a", 8);
      \u0275\u0275text(77, " Register ");
      \u0275\u0275element(78, "i", 7);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(79, "article", 3);
      \u0275\u0275element(80, "img", 17);
      \u0275\u0275elementStart(81, "h3");
      \u0275\u0275text(82, "Campus Experience Language Immersion in English");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(83, "p", 5);
      \u0275\u0275text(84, "English ");
      \u0275\u0275elementStart(85, "strong");
      \u0275\u0275text(86, "language immersion");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(87, "a", 18);
      \u0275\u0275element(88, "i", 7);
      \u0275\u0275text(89, " See details ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(90, "a", 8);
      \u0275\u0275text(91, " Register ");
      \u0275\u0275element(92, "i", 7);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(93, "article", 3);
      \u0275\u0275element(94, "img", 19);
      \u0275\u0275elementStart(95, "h3");
      \u0275\u0275text(96, "Campus Experience Football & Responsible Gaming");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(97, "p", 5);
      \u0275\u0275text(98, "Football camp ");
      \u0275\u0275elementStart(99, "strong");
      \u0275\u0275text(100, "for gamers");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(101, "a", 20);
      \u0275\u0275element(102, "i", 7);
      \u0275\u0275text(103, " See details ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(104, "a", 8);
      \u0275\u0275text(105, " Register ");
      \u0275\u0275element(106, "i", 7);
      \u0275\u0275elementEnd()()()()();
    }
  }, styles: ["\n\n#programmes-section[_ngcontent-%COMP%] {\n  background: #f9f9f9;\n  width: 100%;\n  padding: 90px 0px;\n}\n.programmes[_ngcontent-%COMP%] {\n  padding: 0;\n  width: 70%;\n  margin: auto;\n}\n.programmes[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 30px;\n  font-family:\n    Raleway,\n    Helvetica,\n    sans-serif;\n  color: #363636;\n}\n.programme-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 2rem;\n  justify-content: center;\n}\n.programme[_ngcontent-%COMP%] {\n  background: white;\n  width: 22%;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 2px 2px 5px 1px rgba(140, 140, 140, 0.4196078431);\n  transition: 200ms;\n}\n.programme[_ngcontent-%COMP%]:hover {\n  box-shadow: 0px 0px 5px 0px rgba(140, 140, 140, 0.4196078431);\n}\n.programme[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  margin: 0;\n  text-align: center;\n  background: #212121;\n  color: white;\n  font-size: 22.5px;\n  font-family:\n    Raleway,\n    Helvetica,\n    sans-serif;\n}\n.programme[_ngcontent-%COMP%]   .programme-desc[_ngcontent-%COMP%] {\n  font-family:\n    Raleway,\n    Helvetica,\n    sans-serif;\n  font-size: 16px;\n  margin: 20px 30px 25px 30px;\n  color: #8c8c8c;\n  text-align: center;\n}\n.programme[_ngcontent-%COMP%]   .detailed[_ngcontent-%COMP%] {\n  color: #af8542;\n  font-family:\n    Raleway,\n    Helvetica,\n    sans-serif;\n  font-size: 16px;\n  padding: 12px 42px;\n  text-align: center;\n  text-decoration: none;\n}\n.programme[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n}\n.programme[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin: 10px 30px 20px 30px;\n  padding: 12px 24px;\n  background: #af8542;\n  color: #fff;\n  text-decoration: none;\n  font-size: 17.6px;\n  font-family:\n    Raleway,\n    Helvetica,\n    sans-serif;\n  text-align: center;\n  text-transform: uppercase;\n  border-radius: 3px;\n}\n/*# sourceMappingURL=programmes.css.map */", "\n\n@media (max-width: 768px) {\n  .programmes[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n  .programme[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media (min-width: 769px) and (max-width: 1024px) {\n  .programmes[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n  .programme[_ngcontent-%COMP%] {\n    width: 45%;\n  }\n}\n/*# sourceMappingURL=programmes.responsive.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Programmes, [{
    type: Component,
    args: [{ selector: "app-programmes", standalone: false, template: '<section id="programmes-section">\n  <div class="programmes">\n    <h2>Programmes</h2>\n    <div class="programme-list">\n      <article class="programme">\n        <img src="https://campusexperiencermf.com/wp-content/uploads/2023/02/principal-CE.jpg" alt="Campus Experience" />\n        <h3>Campus <br> Experience</h3>\n        <p class="programme-desc">The football camp <strong>for everyone</strong></p>\n        <a class="detailed" href="https://campusexperiencermf.com/en/campus-experience/"> <i class="fa fa-chevron-right"></i> See details</a>\n        <a class="btn" href="https://campusexperiencermf.com/en/registration/">Register <i class="fa fa-chevron-right"></i></a>\n      </article>\n      <article class="programme">\n        <img src="https://campusexperiencermf.com/wp-content/uploads/2024/11/GMG01808-1024x575.jpg" alt="Goalkeepers" />\n        <h3>Campus Experience Goalkeepers</h3>\n        <p class="programme-desc">Football camp <strong>for goalkeepers</strong></p>\n        <a class="detailed" href="https://campusexperiencermf.com/en/campus-experience-goalkeepers/"> <i class="fa fa-chevron-right"></i> See details</a>\n        <a class="btn" href="https://campusexperiencermf.com/en/registration/">Register <i class="fa fa-chevron-right"></i></a>\n      </article>\n\n      <article class="programme">\n        <img src="https://campusexperiencermf.com/wp-content/uploads/2024/03/programa-campus-experience-max.jpg" alt="MAX" />\n        <h3>Campus Experience MAX</h3>\n        <p class="programme-desc">Football camp <strong>High-skill level</strong></p>\n        <a class="detailed" href="https://campusexperiencermf.com/en/campus-experience-max/"> <i class="fa fa-chevron-right"></i> See details</a>\n        <a class="btn" href="https://campusexperiencermf.com/en/registration/">Register <i class="fa fa-chevron-right"></i></a>\n      </article>\n      <article class="programme">\n        <img src="https://campusexperiencermf.com/wp-content/uploads/2023/11/campus-max-femenino.jpg" alt="MAX FEM" />\n        <h3>Campus Experience MAX FEM</h3>\n        <p class="programme-desc">Football campus <strong>for her</strong></p>\n        <a class="detailed" href="https://campusexperiencermf.com/en/campus-experience-max-fem/">\n          <i class="fa fa-chevron-right"></i> See details\n        </a>\n        <a class="btn" href="https://campusexperiencermf.com/en/registration/">\n          Register <i class="fa fa-chevron-right"></i>\n        </a>\n      </article>\n      <article class="programme">\n        <img src="https://campusexperiencermf.com/wp-content/uploads/2024/11/GMG00579-1024x575.jpg" alt="MAX Goalkeepers" />\n        <h3>Campus Experience MAX Goalkeepers</h3>\n        <p class="programme-desc"><strong>High-skill level</strong> football camp <strong>for goalkeepers</strong></p>\n        <a class="detailed" href="https://campusexperiencermf.com/en/campus-experience-max-goalkeepers/">\n          <i class="fa fa-chevron-right"></i> See details\n        </a>\n        <a class="btn" href="https://campusexperiencermf.com/en/registration/">\n          Register <i class="fa fa-chevron-right"></i>\n        </a>\n      </article>\n      <article class="programme">\n        <img src="https://campusexperiencermf.com/wp-content/uploads/2024/11/92d7db3c-3669-45b3-8ce6-4e2cb4c5bae9-1024x580.jpg" alt="Language Immersion in English" />\n        <h3>Campus Experience Language Immersion in English</h3>\n        <p class="programme-desc">English <strong>language immersion</strong></p>\n        <a class="detailed" href="https://campusexperiencermf.com/en/campus-experience-english-language-immersion/">\n          <i class="fa fa-chevron-right"></i> See details\n        </a>\n        <a class="btn" href="https://campusexperiencermf.com/en/registration/">\n          Register <i class="fa fa-chevron-right"></i>\n        </a>\n      </article>\n      <article class="programme">\n        <img src="https://campusexperiencermf.com/wp-content/uploads/2024/11/b0d0b236-70a6-4632-9c74-058a7f68cfd3-1024x580.jpg" alt="Football & Responsible Gaming" />\n        <h3>Campus Experience Football & Responsible Gaming</h3>\n        <p class="programme-desc">Football camp <strong>for gamers</strong></p>\n        <a class="detailed" href="https://campusexperiencermf.com/en/campus-experience-football-and-responsible-gaming/">\n          <i class="fa fa-chevron-right"></i> See details\n        </a>\n        <a class="btn" href="https://campusexperiencermf.com/en/registration/">\n          Register <i class="fa fa-chevron-right"></i>\n        </a>\n      </article>\n    </div>\n  </div>\n</section>\n', styles: ["/* src/app/home/components/programmes/programmes.scss */\n#programmes-section {\n  background: #f9f9f9;\n  width: 100%;\n  padding: 90px 0px;\n}\n.programmes {\n  padding: 0;\n  width: 70%;\n  margin: auto;\n}\n.programmes h2 {\n  font-size: 30px;\n  font-family:\n    Raleway,\n    Helvetica,\n    sans-serif;\n  color: #363636;\n}\n.programme-list {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 2rem;\n  justify-content: center;\n}\n.programme {\n  background: white;\n  width: 22%;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 2px 2px 5px 1px rgba(140, 140, 140, 0.4196078431);\n  transition: 200ms;\n}\n.programme:hover {\n  box-shadow: 0px 0px 5px 0px rgba(140, 140, 140, 0.4196078431);\n}\n.programme h3 {\n  padding: 10px 20px;\n  margin: 0;\n  text-align: center;\n  background: #212121;\n  color: white;\n  font-size: 22.5px;\n  font-family:\n    Raleway,\n    Helvetica,\n    sans-serif;\n}\n.programme .programme-desc {\n  font-family:\n    Raleway,\n    Helvetica,\n    sans-serif;\n  font-size: 16px;\n  margin: 20px 30px 25px 30px;\n  color: #8c8c8c;\n  text-align: center;\n}\n.programme .detailed {\n  color: #af8542;\n  font-family:\n    Raleway,\n    Helvetica,\n    sans-serif;\n  font-size: 16px;\n  padding: 12px 42px;\n  text-align: center;\n  text-decoration: none;\n}\n.programme img {\n  width: 100%;\n  height: auto;\n}\n.programme .btn {\n  margin: 10px 30px 20px 30px;\n  padding: 12px 24px;\n  background: #af8542;\n  color: #fff;\n  text-decoration: none;\n  font-size: 17.6px;\n  font-family:\n    Raleway,\n    Helvetica,\n    sans-serif;\n  text-align: center;\n  text-transform: uppercase;\n  border-radius: 3px;\n}\n/*# sourceMappingURL=programmes.css.map */\n", "/* src/app/home/components/programmes/programmes.responsive.scss */\n@media (max-width: 768px) {\n  .programmes {\n    width: 90%;\n  }\n  .programme {\n    width: 100%;\n  }\n}\n@media (min-width: 769px) and (max-width: 1024px) {\n  .programmes {\n    width: 80%;\n  }\n  .programme {\n    width: 45%;\n  }\n}\n/*# sourceMappingURL=programmes.responsive.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Programmes, { className: "Programmes", filePath: "src/app/home/components/programmes/programmes.ts", lineNumber: 9 });
})();

// src/app/home/components/why-come/why-come.ts
var WhyCome = class _WhyCome {
  static \u0275fac = function WhyCome_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WhyCome)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WhyCome, selectors: [["app-why-come"]], standalone: false, decls: 93, vars: 0, consts: [["id", "why-should-i-come", 1, "why-come"], [1, "group-separator"], [1, "group"], ["src", "https://campusexperiencermf.com/wp-content/uploads/2017/11/if-you-are-a-child.png", "alt", "If you are a child", 1, "title-image"], [1, "feature-list"], [1, "feature"], ["src", "https://campusexperiencermf.com/wp-content/uploads/2017/03/icon-valdebebas-gris.png", "alt", "Training sessions"], ["src", "https://campusexperiencermf.com/wp-content/uploads/2017/03/iconos-campus-experience-entrenador-real-madrid.png", "alt", "Foundation coaches"], ["src", "https://campusexperiencermf.com/wp-content/uploads/2017/03/iconos-campus-experience-metodologia-entrenamiento.png", "alt", "Unique methods"], ["src", "https://campusexperiencermf.com/wp-content/uploads/2017/03/iconos-campus-experience-tiempo-de-juego-y-piscina.png", "alt", "Games and swimming"], ["src", "https://campusexperiencermf.com/wp-content/uploads/2017/03/iconos-campus-experience-seguimiento-fotogr%c3%a1fico.png", "alt", "Photos"], ["src", "https://campusexperiencermf.com/wp-content/uploads/2017/03/iconos-campus-experience-equipacion-regalo.png", "alt", "Free kit"], ["src", "https://campusexperiencermf.com/wp-content/uploads/2017/03/iconos-campus-experience-entrega-trofeos.png", "alt", "Diplomas"], ["src", "https://campusexperiencermf.com/wp-content/uploads/2017/03/iconos-campus-experience-tour-bernabeu-1.png", "alt", "Visit Bernabeu"], ["src", "https://campusexperiencermf.com/wp-content/uploads/2017/03/iconos-campus-experience-amigos.png", "alt", "New friends"], ["src", "https://campusexperiencermf.com/wp-content/uploads/2017/03/linea-dorada.png", "alt", "", 1, "separator"], ["src", "https://campusexperiencermf.com/wp-content/uploads/2017/11/if-you-are-a-parent.png", "alt", "If you are a parent", 1, "title-image"], ["src", "https://campusexperiencermf.com/wp-content/uploads/2017/03/iconos-campus-experience-world.png", "alt", "Great reputation worldwide"], ["src", "https://campusexperiencermf.com/wp-content/uploads/2017/03/iconos-campus-experience-Experiencia-internacional.png", "alt", "International experience"], ["src", "https://campusexperiencermf.com/wp-content/uploads/2017/03/iconos-campus-experience-equipo-profesionales.png", "alt", "Qualified professionals"], ["src", "https://campusexperiencermf.com/wp-content/uploads/2017/03/iconos-campus-experience-habilidades-sociales.png", "alt", "Work on values"], ["src", "https://campusexperiencermf.com/wp-content/uploads/2017/03/iconos-campus-experience-seguro-medico.png", "alt", "Sports health insurance"], ["src", "https://campusexperiencermf.com/wp-content/uploads/2017/03/iconos-campus-experience-instalaciones-comodidades.png", "alt", "Facilities"], ["src", "https://campusexperiencermf.com/wp-content/uploads/2017/03/iconos-campus-experience-transfer.png", "alt", "Transfer services"], ["src", "https://campusexperiencermf.com/wp-content/uploads/2017/03/iconos-campus-experience-comida-sana.png", "alt", "Healthy food"], ["src", "https://campusexperiencermf.com/wp-content/uploads/2017/03/iconos-campus-experience-higiene-personal.png", "alt", "Healthy habits"], ["src", "https://campusexperiencermf.com/wp-content/uploads/2017/03/iconos-campus-experience-practica-de-idiomas.png", "alt", "Language practice"], [1, "faq"], ["href", "https://campusexperiencermf.com/en/frequently-asked-questions/"]], template: function WhyCome_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "h2");
      \u0275\u0275text(2, "Why should I come?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 1)(4, "div", 2);
      \u0275\u0275element(5, "img", 3);
      \u0275\u0275elementStart(6, "div", 4)(7, "div", 5);
      \u0275\u0275element(8, "img", 6);
      \u0275\u0275elementStart(9, "h6");
      \u0275\u0275text(10, "Training sessions at Real Madrid City");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "div", 5);
      \u0275\u0275element(12, "img", 7);
      \u0275\u0275elementStart(13, "h6");
      \u0275\u0275text(14, "Real Madrid Foundation coaches");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "div", 5);
      \u0275\u0275element(16, "img", 8);
      \u0275\u0275elementStart(17, "h6");
      \u0275\u0275text(18, "Unique methods with daily training and matches");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "div", 5);
      \u0275\u0275element(20, "img", 9);
      \u0275\u0275elementStart(21, "h6");
      \u0275\u0275text(22, "Games and swimming-pool time");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "div", 5);
      \u0275\u0275element(24, "img", 10);
      \u0275\u0275elementStart(25, "h6");
      \u0275\u0275text(26, "Campus Experience photos");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(27, "div", 5);
      \u0275\u0275element(28, "img", 11);
      \u0275\u0275elementStart(29, "h6");
      \u0275\u0275text(30, "Free kit");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(31, "div", 5);
      \u0275\u0275element(32, "img", 12);
      \u0275\u0275elementStart(33, "h6");
      \u0275\u0275text(34, "Diplomas awarded");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(35, "div", 5);
      \u0275\u0275element(36, "img", 13);
      \u0275\u0275elementStart(37, "h6");
      \u0275\u0275text(38, "Visit to the Santiago Bernab\xE9u stadium");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(39, "div", 5);
      \u0275\u0275element(40, "img", 14);
      \u0275\u0275elementStart(41, "h6");
      \u0275\u0275text(42, "New friends and teammates");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(43, "img", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "div", 2);
      \u0275\u0275element(45, "img", 16);
      \u0275\u0275elementStart(46, "div", 4)(47, "div", 5);
      \u0275\u0275element(48, "img", 17);
      \u0275\u0275elementStart(49, "h6");
      \u0275\u0275text(50, "Camp with great reputation worldwide");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(51, "div", 5);
      \u0275\u0275element(52, "img", 18);
      \u0275\u0275elementStart(53, "h6");
      \u0275\u0275text(54, "International experience");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(55, "div", 5);
      \u0275\u0275element(56, "img", 19);
      \u0275\u0275elementStart(57, "h6");
      \u0275\u0275text(58, "Great team of qualified professionals");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(59, "div", 5);
      \u0275\u0275element(60, "img", 20);
      \u0275\u0275elementStart(61, "h6");
      \u0275\u0275text(62, "Work on values and social skills");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(63, "div", 5);
      \u0275\u0275element(64, "img", 21);
      \u0275\u0275elementStart(65, "h6");
      \u0275\u0275text(66, "Private sports health insurance");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(67, "div", 5);
      \u0275\u0275element(68, "img", 22);
      \u0275\u0275elementStart(69, "h6");
      \u0275\u0275text(70, "Facilities and accommodation with all necessary amenities");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(71, "div", 5);
      \u0275\u0275element(72, "img", 23);
      \u0275\u0275elementStart(73, "h6");
      \u0275\u0275text(74, "Transfer and pick-up services");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(75, "div", 5);
      \u0275\u0275element(76, "img", 24);
      \u0275\u0275elementStart(77, "h6");
      \u0275\u0275text(78, "Healthy, varied food");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(79, "div", 5);
      \u0275\u0275element(80, "img", 25);
      \u0275\u0275elementStart(81, "h6");
      \u0275\u0275text(82, "Education on healthy living habits");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(83, "div", 5);
      \u0275\u0275element(84, "img", 26);
      \u0275\u0275elementStart(85, "h6");
      \u0275\u0275text(86, "Language practice");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(87, "img", 15);
      \u0275\u0275elementStart(88, "p", 27);
      \u0275\u0275text(89, "If you have questions, visit our ");
      \u0275\u0275elementStart(90, "strong")(91, "a", 28);
      \u0275\u0275text(92, "FAQ section >");
      \u0275\u0275elementEnd()()()()()();
    }
  }, styles: ["\n\n.why-come[_ngcontent-%COMP%] {\n  background: white;\n  padding: 90px 0;\n  width: 70%;\n  margin: auto;\n}\n.why-come[_ngcontent-%COMP%]   .group-separator[_ngcontent-%COMP%] {\n  display: flex;\n}\n.why-come[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 30px;\n  width: 40%;\n  color: #363636;\n  font-family:\n    Raleway,\n    Helvetica,\n    sans-serif;\n  margin-bottom: 2rem;\n}\n.why-come[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%] {\n  width: 35%;\n  padding: 10px;\n  margin: 0 auto 40px auto;\n  text-align: center;\n}\n.why-come[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   .title-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  margin-bottom: 20px;\n}\n.why-come[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   .feature-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 20px;\n}\n.why-come[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   .feature[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.why-come[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   .feature[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n}\n.why-come[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   .feature[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  margin: 0;\n  font-family:\n    Raleway,\n    Helvetica,\n    sans-serif;\n  font-size: 22.4px;\n  font-weight: 900;\n  text-align: left;\n  color: #363636;\n}\n.why-come[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   .separator[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  margin: 30px 0;\n}\n.why-come[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   .faq[_ngcontent-%COMP%] {\n  font-family:\n    Raleway,\n    Helvetica,\n    sans-serif;\n  font-size: 16px;\n  color: #8c8c8c;\n}\n.why-come[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   .faq[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #8c8c8c;\n  text-decoration: none;\n}\n/*# sourceMappingURL=why-come.css.map */", "\n\n@media (max-width: 768px) {\n  .why-come[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n  .why-come[_ngcontent-%COMP%]   .group-separator[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .why-come[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .why-come[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media (min-width: 769px) and (max-width: 1024px) {\n  .why-come[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n  .why-come[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%] {\n    width: 45%;\n  }\n}\n/*# sourceMappingURL=why-come.responsive.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WhyCome, [{
    type: Component,
    args: [{ selector: "app-why-come", standalone: false, template: '<section id="why-should-i-come" class="why-come">\n  <h2>Why should I come?</h2>\n  <div class="group-separator">\n    <div class="group">\n      <img class="title-image" src="https://campusexperiencermf.com/wp-content/uploads/2017/11/if-you-are-a-child.png" alt="If you are a child">\n      <div class="feature-list">\n        <div class="feature">\n          <img src="https://campusexperiencermf.com/wp-content/uploads/2017/03/icon-valdebebas-gris.png" alt="Training sessions">\n          <h6>Training sessions at Real Madrid City</h6>\n        </div>\n        <div class="feature">\n          <img src="https://campusexperiencermf.com/wp-content/uploads/2017/03/iconos-campus-experience-entrenador-real-madrid.png" alt="Foundation coaches">\n          <h6>Real Madrid Foundation coaches</h6>\n        </div>\n        <div class="feature">\n          <img src="https://campusexperiencermf.com/wp-content/uploads/2017/03/iconos-campus-experience-metodologia-entrenamiento.png" alt="Unique methods">\n          <h6>Unique methods with daily training and matches</h6>\n        </div>\n        <div class="feature">\n          <img src="https://campusexperiencermf.com/wp-content/uploads/2017/03/iconos-campus-experience-tiempo-de-juego-y-piscina.png" alt="Games and swimming">\n          <h6>Games and swimming-pool time</h6>\n        </div>\n        <div class="feature">\n          <img src="https://campusexperiencermf.com/wp-content/uploads/2017/03/iconos-campus-experience-seguimiento-fotogr%c3%a1fico.png" alt="Photos">\n          <h6>Campus Experience photos</h6>\n        </div>\n        <div class="feature">\n          <img src="https://campusexperiencermf.com/wp-content/uploads/2017/03/iconos-campus-experience-equipacion-regalo.png" alt="Free kit">\n          <h6>Free kit</h6>\n        </div>\n        <div class="feature">\n          <img src="https://campusexperiencermf.com/wp-content/uploads/2017/03/iconos-campus-experience-entrega-trofeos.png" alt="Diplomas">\n          <h6>Diplomas awarded</h6>\n        </div>\n        <div class="feature">\n          <img src="https://campusexperiencermf.com/wp-content/uploads/2017/03/iconos-campus-experience-tour-bernabeu-1.png" alt="Visit Bernabeu">\n          <h6>Visit to the Santiago Bernab\xE9u stadium</h6>\n        </div>\n        <div class="feature">\n          <img src="https://campusexperiencermf.com/wp-content/uploads/2017/03/iconos-campus-experience-amigos.png" alt="New friends">\n          <h6>New friends and teammates</h6>\n        </div>\n      </div>\n      <img class="separator" src="https://campusexperiencermf.com/wp-content/uploads/2017/03/linea-dorada.png" alt="">\n    </div>\n\n    <div class="group">\n      <img class="title-image" src="https://campusexperiencermf.com/wp-content/uploads/2017/11/if-you-are-a-parent.png" alt="If you are a parent">\n      <div class="feature-list">\n        <div class="feature">\n          <img src="https://campusexperiencermf.com/wp-content/uploads/2017/03/iconos-campus-experience-world.png" alt="Great reputation worldwide">\n          <h6>Camp with great reputation worldwide</h6>\n        </div>\n        <div class="feature">\n          <img src="https://campusexperiencermf.com/wp-content/uploads/2017/03/iconos-campus-experience-Experiencia-internacional.png" alt="International experience">\n          <h6>International experience</h6>\n        </div>\n        <div class="feature">\n          <img src="https://campusexperiencermf.com/wp-content/uploads/2017/03/iconos-campus-experience-equipo-profesionales.png" alt="Qualified professionals">\n          <h6>Great team of qualified professionals</h6>\n        </div>\n        <div class="feature">\n          <img src="https://campusexperiencermf.com/wp-content/uploads/2017/03/iconos-campus-experience-habilidades-sociales.png" alt="Work on values">\n          <h6>Work on values and social skills</h6>\n        </div>\n        <div class="feature">\n          <img src="https://campusexperiencermf.com/wp-content/uploads/2017/03/iconos-campus-experience-seguro-medico.png" alt="Sports health insurance">\n          <h6>Private sports health insurance</h6>\n        </div>\n        <div class="feature">\n          <img src="https://campusexperiencermf.com/wp-content/uploads/2017/03/iconos-campus-experience-instalaciones-comodidades.png" alt="Facilities">\n          <h6>Facilities and accommodation with all necessary amenities</h6>\n        </div>\n        <div class="feature">\n          <img src="https://campusexperiencermf.com/wp-content/uploads/2017/03/iconos-campus-experience-transfer.png" alt="Transfer services">\n          <h6>Transfer and pick-up services</h6>\n        </div>\n        <div class="feature">\n          <img src="https://campusexperiencermf.com/wp-content/uploads/2017/03/iconos-campus-experience-comida-sana.png" alt="Healthy food">\n          <h6>Healthy, varied food</h6>\n        </div>\n        <div class="feature">\n          <img src="https://campusexperiencermf.com/wp-content/uploads/2017/03/iconos-campus-experience-higiene-personal.png" alt="Healthy habits">\n          <h6>Education on healthy living habits</h6>\n        </div>\n        <div class="feature">\n          <img src="https://campusexperiencermf.com/wp-content/uploads/2017/03/iconos-campus-experience-practica-de-idiomas.png" alt="Language practice">\n          <h6>Language practice</h6>\n        </div>\n      </div>\n      <img class="separator" src="https://campusexperiencermf.com/wp-content/uploads/2017/03/linea-dorada.png" alt="">\n      <p class="faq">If you have questions, visit our <strong><a href="https://campusexperiencermf.com/en/frequently-asked-questions/">FAQ section &gt;</a></strong></p>\n    </div>\n  </div>\n</section>\n', styles: ["/* src/app/home/components/why-come/why-come.scss */\n.why-come {\n  background: white;\n  padding: 90px 0;\n  width: 70%;\n  margin: auto;\n}\n.why-come .group-separator {\n  display: flex;\n}\n.why-come h2 {\n  text-align: center;\n  font-size: 30px;\n  width: 40%;\n  color: #363636;\n  font-family:\n    Raleway,\n    Helvetica,\n    sans-serif;\n  margin-bottom: 2rem;\n}\n.why-come .group {\n  width: 35%;\n  padding: 10px;\n  margin: 0 auto 40px auto;\n  text-align: center;\n}\n.why-come .group .title-image {\n  width: 100%;\n  height: auto;\n  margin-bottom: 20px;\n}\n.why-come .group .feature-list {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 20px;\n}\n.why-come .group .feature {\n  display: flex;\n  align-items: center;\n}\n.why-come .group .feature img {\n  width: 100px;\n  height: 100px;\n}\n.why-come .group .feature h6 {\n  margin: 0;\n  font-family:\n    Raleway,\n    Helvetica,\n    sans-serif;\n  font-size: 22.4px;\n  font-weight: 900;\n  text-align: left;\n  color: #363636;\n}\n.why-come .group .separator {\n  width: 100%;\n  height: auto;\n  margin: 30px 0;\n}\n.why-come .group .faq {\n  font-family:\n    Raleway,\n    Helvetica,\n    sans-serif;\n  font-size: 16px;\n  color: #8c8c8c;\n}\n.why-come .group .faq a {\n  color: #8c8c8c;\n  text-decoration: none;\n}\n/*# sourceMappingURL=why-come.css.map */\n", "/* src/app/home/components/why-come/why-come.responsive.scss */\n@media (max-width: 768px) {\n  .why-come {\n    width: 90%;\n  }\n  .why-come .group-separator {\n    flex-direction: column;\n  }\n  .why-come .group {\n    width: 100%;\n  }\n  .why-come h2 {\n    width: 100%;\n  }\n}\n@media (min-width: 769px) and (max-width: 1024px) {\n  .why-come {\n    width: 80%;\n  }\n  .why-come .group {\n    width: 45%;\n  }\n}\n/*# sourceMappingURL=why-come.responsive.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WhyCome, { className: "WhyCome", filePath: "src/app/home/components/why-come/why-come.ts", lineNumber: 9 });
})();

// src/app/home/components/registration-banner/registration-banner.ts
var RegistrationBanner = class _RegistrationBanner {
  static \u0275fac = function RegistrationBanner_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RegistrationBanner)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RegistrationBanner, selectors: [["app-registration-banner"]], standalone: false, decls: 15, vars: 0, consts: [["id", "registration-banner", 1, "registration-banner"], [1, "banner-content"], ["href", "https://campusexperiencermf.com/en/registration/", 1, "btn"], ["aria-hidden", "true", "viewBox", "0 0 320 512", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"]], template: function RegistrationBanner_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div")(3, "h2");
      \u0275\u0275text(4, "REGISTRATIONS NOW OPEN");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h5");
      \u0275\u0275text(6, "Limited availability! Book now to avoid missing out.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div")(8, "a", 2);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(9, "svg", 3);
      \u0275\u0275element(10, "path", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(11, "span");
      \u0275\u0275text(12, "Registration ");
      \u0275\u0275element(13, "br");
      \u0275\u0275text(14, " form");
      \u0275\u0275elementEnd()()()()();
    }
  }, styles: ["\n\n.registration-banner[_ngcontent-%COMP%] {\n  background: #af8542;\n  padding: 70px 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 50px;\n  flex-wrap: wrap;\n}\n.banner-content[_ngcontent-%COMP%] {\n  width: 70%;\n  margin: auto;\n  text-align: left;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.banner-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 30px;\n  color: #363636;\n  font-family:\n    Raleway,\n    Helvetica,\n    sans-serif;\n  font-weight: 900;\n  margin-bottom: 0.5rem;\n}\n.banner-content[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-family:\n    Raleway,\n    Helvetica,\n    sans-serif;\n  font-size: 21px;\n  color: #ffffff;\n  letter-spacing: 1px;\n  margin-top: 0;\n  margin-bottom: 1.5rem;\n}\n.banner-content[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 12px 24px;\n  background: #212121;\n  color: #fff;\n  text-decoration: none;\n  font-family:\n    Raleway,\n    Helvetica,\n    sans-serif;\n  font-size: 17.6px;\n  text-transform: uppercase;\n  font-weight: 700;\n  line-height: 1.1em;\n  letter-spacing: 1px;\n  border-radius: 3px;\n  display: inline-flex;\n  flex-direction: row-reverse;\n  align-items: center;\n  gap: 15px;\n}\n.banner-content[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover, \n.banner-content[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:focus {\n  background: #000000;\n}\n.banner-content[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1em;\n  height: 1em;\n  fill: currentColor;\n}\n/*# sourceMappingURL=registration-banner.css.map */", "\n\n@media (max-width: 768px) {\n  .registration-banner[_ngcontent-%COMP%] {\n    padding: 40px 20px;\n  }\n  .banner-content[_ngcontent-%COMP%] {\n    width: 90%;\n    flex-direction: column;\n    text-align: center;\n    gap: 20px;\n  }\n}\n@media (min-width: 769px) and (max-width: 1024px) {\n  .banner-content[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n}\n/*# sourceMappingURL=registration-banner.responsive.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RegistrationBanner, [{
    type: Component,
    args: [{ selector: "app-registration-banner", standalone: false, template: '<section id="registration-banner" class="registration-banner">\n  <div class="banner-content">\n    <div>\n      <h2>REGISTRATIONS NOW OPEN</h2>\n      <h5>Limited availability! Book now to avoid missing out.</h5>\n    </div>\n    <div>\n      <a class="btn" href="https://campusexperiencermf.com/en/registration/">\n        <svg aria-hidden="true" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg">\n          <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/>\n        </svg>\n        <span>Registration <br> form</span>\n      </a>\n    </div>\n  </div>\n</section>\n', styles: ["/* src/app/home/components/registration-banner/registration-banner.scss */\n.registration-banner {\n  background: #af8542;\n  padding: 70px 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 50px;\n  flex-wrap: wrap;\n}\n.banner-content {\n  width: 70%;\n  margin: auto;\n  text-align: left;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.banner-content h2 {\n  font-size: 30px;\n  color: #363636;\n  font-family:\n    Raleway,\n    Helvetica,\n    sans-serif;\n  font-weight: 900;\n  margin-bottom: 0.5rem;\n}\n.banner-content h5 {\n  font-family:\n    Raleway,\n    Helvetica,\n    sans-serif;\n  font-size: 21px;\n  color: #ffffff;\n  letter-spacing: 1px;\n  margin-top: 0;\n  margin-bottom: 1.5rem;\n}\n.banner-content .btn {\n  padding: 12px 24px;\n  background: #212121;\n  color: #fff;\n  text-decoration: none;\n  font-family:\n    Raleway,\n    Helvetica,\n    sans-serif;\n  font-size: 17.6px;\n  text-transform: uppercase;\n  font-weight: 700;\n  line-height: 1.1em;\n  letter-spacing: 1px;\n  border-radius: 3px;\n  display: inline-flex;\n  flex-direction: row-reverse;\n  align-items: center;\n  gap: 15px;\n}\n.banner-content .btn:hover,\n.banner-content .btn:focus {\n  background: #000000;\n}\n.banner-content .btn svg {\n  width: 1em;\n  height: 1em;\n  fill: currentColor;\n}\n/*# sourceMappingURL=registration-banner.css.map */\n", "/* src/app/home/components/registration-banner/registration-banner.responsive.scss */\n@media (max-width: 768px) {\n  .registration-banner {\n    padding: 40px 20px;\n  }\n  .banner-content {\n    width: 90%;\n    flex-direction: column;\n    text-align: center;\n    gap: 20px;\n  }\n}\n@media (min-width: 769px) and (max-width: 1024px) {\n  .banner-content {\n    width: 80%;\n  }\n}\n/*# sourceMappingURL=registration-banner.responsive.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RegistrationBanner, { className: "RegistrationBanner", filePath: "src/app/home/components/registration-banner/registration-banner.ts", lineNumber: 9 });
})();

// src/app/home/components/home/home.ts
var Home = class _Home {
  static \u0275fac = function Home_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Home)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Home, selectors: [["app-home"]], standalone: false, decls: 7, vars: 0, template: function Home_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-header")(1, "app-hero")(2, "app-hero-video")(3, "app-intro")(4, "app-programmes")(5, "app-why-come")(6, "app-registration-banner");
    }
  }, dependencies: [Header, Hero, HeroVideo, Intro, Programmes, WhyCome, RegistrationBanner], styles: ["\n\n/*# sourceMappingURL=home.responsive.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Home, [{
    type: Component,
    args: [{ selector: "app-home", standalone: false, template: "<app-header></app-header>\n<app-hero></app-hero>\n<app-hero-video></app-hero-video>\n<app-intro></app-intro>\n<app-programmes></app-programmes>\n<app-why-come></app-why-come>\n<app-registration-banner></app-registration-banner>\n", styles: ["/* src/app/home/components/home/home.responsive.scss */\n/*# sourceMappingURL=home.responsive.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Home, { className: "Home", filePath: "src/app/home/components/home/home.ts", lineNumber: 9 });
})();

// src/app/home/home-routing-module.ts
var routes = [{
  path: "",
  component: Home
}];
var HomeRoutingModule = class _HomeRoutingModule {
  static \u0275fac = function HomeRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HomeRoutingModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _HomeRoutingModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HomeRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/home/home-module.ts
var HomeModule = class _HomeModule {
  static \u0275fac = function HomeModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HomeModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _HomeModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
    CommonModule,
    HomeRoutingModule
  ] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HomeModule, [{
    type: NgModule,
    args: [{
      declarations: [
        Home,
        Intro,
        Programmes,
        WhyCome,
        RegistrationBanner
      ],
      imports: [
        CommonModule,
        HomeRoutingModule,
        Header,
        Hero,
        HeroVideo
      ]
    }]
  }], null, null);
})();
export {
  HomeModule
};
//# sourceMappingURL=chunk-RIZWTFQM.mjs.map
