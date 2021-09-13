import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  sections: Array<any> = [
    {
      content: "Stack Rank is a new way to vote on the best of anything. Find a list, then drag and drop the items in the order that you think they should be ranked. Hit submit and see the results.",
      image: "/assets/images/stack-rank-list.png",
      title: "What is Stack Rank?",
    },
    {
      content: "Getting started is easy.... Just click on the Sign In button above to be directe to the login screen, then select 'Sinup' at the bottom of the form",
      image: "/assets/images/sign-in.png",
      title: "How to get started?",
    },
    {
      content: "Find out what your peers think by sharing your lists. You can share your list with a group or make it public for anyone to vote on. Afterwards browse lists that others have shared.",
      image: "/assets/images/share.png",
      title: "Share your lists",
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
