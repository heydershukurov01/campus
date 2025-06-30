import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title-of-inner',
  standalone: false,
  templateUrl: './title-of-inner.html',
  styleUrl: './title-of-inner.scss'
})
export class TitleOfInner {
  @Input() title: string | null = null;
  @Input() breadcrumbs: { title: string, url: string }[] | null = null
}
