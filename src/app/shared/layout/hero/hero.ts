import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrls: ['./hero.scss', './hero.responsive.scss']
})
export class Hero {
  isMenuOpen = false;
  submenuOpen = false;
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;

  }
  toggleSubmenu() {
    this.submenuOpen = !this.submenuOpen;
  }
}
