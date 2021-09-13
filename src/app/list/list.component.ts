import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { List } from '../list';
import { Location } from '@angular/common';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  title: string = "Vote Succesful"
  content: string = "Thank you for your vote. It has been recored and added to our records"

  list: List = {
    id: 1,
    label: "What is the best JS framework",
    items: [
      {name: "Angular", id: "1", rank: "1"},
      {name: "Jquery", id: "2", rank: "2"},
      {name: "React", id: "3", rank: "3"},
      {name: "Vue", id: "4", rank: "4"},
    ]
  }

  constructor(
    private location: Location,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.list.items, event.previousIndex, event.currentIndex);
  }

  openDialog() {
    this.dialog.open(DialogComponent, {
      data: {
        title: this.title,
        content: this.content
      }
    });
  }

  handleVote() {
    this.list.items.forEach((item, index) => {
      item.rank = `${index + 1}`;
    })

    this.openDialog();

    console.log(this.list.items)
  }

  goBack(): void {
    this.location.back();
  }

}
