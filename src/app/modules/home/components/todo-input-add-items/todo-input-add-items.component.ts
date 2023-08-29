import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-items',
  templateUrl: './todo-input-add-items.component.html',
  styleUrls: ['./todo-input-add-items.component.scss'],
})
export class TodoInputAddItemsComponent {
  @Output() public emitNewTask = new EventEmitter();

  public taskName = '';

  public createTask(): void {
    if (this.taskName.trim()) {
      this.emitNewTask.emit(this.taskName);
    }

    this.taskName = '';
  }
}
