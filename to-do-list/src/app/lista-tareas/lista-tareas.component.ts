import { Component } from '@angular/core';

interface Tarea {
  titulo: string;
  descripcion: string;
  completada: boolean;
}

@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.css']
})
export class ListaTareasComponent {
  tareas: Tarea[] = [];

  agregarTarea(tarea: Tarea) {
    this.tareas.push(tarea);
  }

  completarTarea(index: number) {
    this.tareas[index].completada = !this.tareas[index].completada;
  }

  eliminarTarea(index: number) {
    this.tareas.splice(index, 1);
  }
}