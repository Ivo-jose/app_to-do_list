import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-items',
  templateUrl: './todo-input-add-items.component.html',
  styleUrls: ['./todo-input-add-items.component.scss']
})
export class TodoInputAddItemsComponent implements OnInit {

  @Output() public issueTaskListItem =  new EventEmitter();

  public addItemsInTaskList: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  public submitItemTaskList() {
    this.addItemsInTaskList = this.addItemsInTaskList.trim();
    if(this.addItemsInTaskList) {
      this.issueTaskListItem.emit(this.addItemsInTaskList);
      this.addItemsInTaskList = ""
    }

  }
}
