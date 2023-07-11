// Este es el componente del formulario de la tarea. Aquí es donde se crea una nueva tarea.

import { Component, EventEmitter, Output } from '@angular/core';

// Decorador que especifica los metadatos del componente.
@Component({
  selector: 'app-formulario-tarea', // El nombre del componente.
  templateUrl: './formulario-tarea.component.html', // La ubicación del archivo de plantilla HTML.
  styleUrls: ['./formulario-tarea.component.css'] // La ubicación del archivo de estilos CSS.
})

export class FormularioTareaComponent {
  @Output() tareaCreada = new EventEmitter<any>(); // Esto emitirá un evento cada vez que se cree una nueva tarea.
  titulo:string = ''; // Aquí se almacena el título de la tarea.
  descripcion:string = ''; // Aquí se almacena la descripción de la tarea.

  // Este método crea una nueva tarea y la emite.
  agregarTarea() {
    const tarea = { // Crea una nueva tarea.
      titulo: this.titulo,
      descripcion: this.descripcion,
      completada: false
    };
    this.tareaCreada.emit(tarea); // Emite la nueva tarea.
    this.titulo = ''; // Limpia el campo del título.
    this.descripcion = ''; // Limpia el campo de la descripción.
  }
}