import { Component, DoCheck, Input, OnInit } from '@angular/core';

//Interface
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit, DoCheck {

  public taskList: Array<TaskList> = [];
  constructor() { }

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    this.taskList.sort((first, last) => Number(first.checked) - Number(last.checked));
  }


  public deleteItemTaskList(event: number) {
    this.taskList.splice(event, 1);
  }

  public deleteAllTaskList() {
    const confirm = window.confirm("Você deseja realmente deletar tudo?");
    if(confirm) {
      this.taskList = [];
    }
  }

  public setIssueTaskList(event: string) {
    console.log(event);
    this.taskList.push({task: event, checked: false});
  }

  public validationInput(event: string, index: number) {
    if(!event.length) {
      const confirm = window.confirm("Task está vazia, deseja DELETAR?");
      if(confirm) {
        this.deleteItemTaskList(index);
      }
    }
  }
}
