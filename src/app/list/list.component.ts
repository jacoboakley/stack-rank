import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  list = {
    id: "1",
    label: "What is the best JS framework",
    items: [
      {name: "Angular", id: "1", rank: "1"},
      {name: "Jquery", id: "2", rank: "2"},
      {name: "React", id: "3", rank: "3"},
      {name: "Vue", id: "4", rank: "4"},
    ]
  }

  constructor() { }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.list.items, event.previousIndex, event.currentIndex);
  }

  handleVote() {
    this.list.items.forEach((item, index) => {
      item.rank = `${index + 1}`;
    })

    console.log(this.list.items)
  }

}
