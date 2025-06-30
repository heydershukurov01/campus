import { Component } from '@angular/core';

@Component({
  selector: 'app-what-is-campus-experience',
  standalone: false,
  templateUrl: './what-is-campus-experience.html',
  styleUrl: './what-is-campus-experience.scss'
})
export class WhatIsCampusExperience {
  breadcrumbs: { title: string; url: string }[] | null = [
    {title: "Home", url: "/"},
    {title: "What is Campus Experience", url: "/what-is-campus-experience"}
  ];

}
