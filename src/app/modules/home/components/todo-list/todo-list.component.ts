import { Component, DoCheck, OnInit } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit, DoCheck {
  public taskList: Array<TaskList> = [];

  public hasAnyTasks(): boolean {
    return this.taskList.length > 0;
  }

  ngOnInit(): void {
    this.taskList = JSON.parse(localStorage.getItem('taskList') || '[]');
  }

  ngDoCheck(): void {
    this.sortTasksByCheckedLast();
    localStorage.setItem('taskList', JSON.stringify(this.taskList));
  }

  public createTask(title: string): void {
    this.taskList.push({ title, checked: false });
  }

  public removeSingleTask(position: number): void {
    this.taskList.splice(position, 1);
  }

  public removeAllTasks(): void {
    this.taskList = [];
  }

  public removeTaskIfTitleEmpty(title: string, position: number) {
    if (!title.length) {
      this.taskList.splice(position, 1);
    }
  }

  public sortTasksByCheckedLast(): void {
    this.taskList.sort(
      (first, last) => Number(first.checked) - Number(last.checked)
    );
  }
}
