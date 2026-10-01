import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskStructure } from '../../services/my-service';

@Component({
  imports: [],
  selector: 'app-dumb-component',
  styleUrl: './dumb-component.css',
  templateUrl: './dumb-component.html',
})
export class DumbComponent {
  @Input()
  product?: TaskStructure

  @Output()
  taskId = new EventEmitter<number>();

  sendTaskId(id: number) {
    this.taskId.emit(id);
  }
}
