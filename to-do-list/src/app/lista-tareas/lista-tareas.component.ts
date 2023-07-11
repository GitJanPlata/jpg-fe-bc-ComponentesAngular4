// Este es el componente de la lista de tareas. Aquí es donde se almacenan, se completan y se eliminan las tareas.

import { Component } from '@angular/core';

// Esto es una interfaz para el tipo de datos Tarea.
interface Tarea {
  titulo: string;
  descripcion: string;
  completada: boolean;
}

@Component({
  selector: 'app-lista-tareas', // El nombre del componente.
  templateUrl: './lista-tareas.component.html', // La ubicación del archivo de plantilla HTML.
  styleUrls: ['./lista-tareas.component.css'] // La ubicación del archivo de estilos CSS.
})

export class ListaTareasComponent {
  tareas: Tarea[] = []; // Aquí es donde se almacenan las tareas.

  // Este método agrega una nueva tarea a la lista de tareas.
  agregarTarea(tarea: Tarea) {
    this.tareas.push(tarea);
  }

  // Este método marca una tarea como completada o no completada.
  completarTarea(index: number) {
    this.tareas[index].completada = !this.tareas[index].completada;
  }

  // Este método elimina una tarea de la lista de tareas.
  eliminarTarea(index: number) {
    this.tareas.splice(index, 1);
  }
}