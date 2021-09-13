import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {

  lists: Array<any> = [
    {
      id: "1",
      label: "What is the best JS framework?",
      items: [
        {name: "Angular", id: "1", rank: "1"},
        {name: "Jquery", id: "2", rank: "2"},
        {name: "React", id: "3", rank: "3"},
        {name: "Vue", id: "4", rank: "4"},
      ]
    },
    {
      id: "2",
      label: "What is your favorite part of being a developer?",
      items: [
        {name: "FrontEnd", id: "1", rank: "1"},
        {name: "BackEnd", id: "2", rank: "2"},
        {name: "Everything", id: "3", rank: "3"},
        {name: "Design", id: "4", rank: "4"},
      ]
    },
    {
      id: "3",
      label: "What is the best type of cheese?",
      items: [
        {name: "American", id: "1", rank: "1"},
        {name: "Swiss", id: "2", rank: "2"},
        {name: "Provolone", id: "3", rank: "3"},
        {name: "Cheddar", id: "4", rank: "4"},
      ]
    },
    {
      id: "4",
      label: "Who is going to win the NCAA Championship in 2021",
      items: [
        {name: "Oklahoma University", id: "1", rank: "1"},
        {name: "Alabama University", id: "2", rank: "2"},
        {name: "University of Southern California", id: "3", rank: "3"},
        {name: "Louisana State University", id: "4", rank: "4"},
      ]
    },
  ]

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToRoute(id: string): void {
    this.router.navigateByUrl(`list/${id}`)
  }

}
