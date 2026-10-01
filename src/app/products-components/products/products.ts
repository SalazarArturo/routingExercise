import { Component, OnInit } from '@angular/core';
import { MyService, TaskStructure } from '../../services/my-service';
import { DumbComponent } from '../dumb-component/dumb-component';

@Component({
  imports: [DumbComponent],
  selector: 'app-products',
  styleUrl: './products.css',
  templateUrl: './products.html',
})
export class Products implements OnInit {

  protected tasks?: TaskStructure[];
  protected catchedId?: number;

  constructor(private taskService: MyService) {}

  ngOnInit(): void {
    this.execute();
  }

  execute() {
    this.tasks = structuredClone(this.taskService.getAllTasks());
  }

  catchTaskId(id: number){
    this.catchedId = id;
    console.log(`id capturado listo para enviar a la pagina de detalle ${this.catchedId}`);
  }
}
