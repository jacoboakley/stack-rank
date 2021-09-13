import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  year: Number = new Date().getFullYear()

  sites: Array<any> = [
    {
      route: "https://github.com/jacoboakley",
      image: "/assets/images/GitHub-Mark-Light-120px-plus.png",
      imageAlt: "Github Logo"
    },
    {
      route: "https://www.linkedin.com/in/jacoboakley/",
      image: "/assets/images/LI-In-Bug.png",
      imageAlt: "LinkedIn Logo"
    },
    {
      route: "https://codepen.io/jacoboakley",
      image: "/assets/images/Codepen-White-Large.png",
      imageAlt: "Codepen Logo"
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
