import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() title: string = "";

  links: Array<any> = [
    {route: "/home", label: "Home"},
    {route: "/lists", label: "Lists"}
  ]

  constructor(private router: Router){}

  ngOnInit(): void {
  }

  goToRoute(route: string): void {
    this.router.navigateByUrl(route)
  }
}
