import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-formulario-tarea',
  templateUrl: './formulario-tarea.component.html',
  styleUrls: ['./formulario-tarea.component.css']
})
export class FormularioTareaComponent {
  @Output() tareaCreada = new EventEmitter<any>();
  titulo:string = '';
  descripcion:string = '';

  agregarTarea() {
    const tarea = {
      titulo: this.titulo,
      descripcion: this.descripcion,
      completada: false
    };
    this.tareaCreada.emit(tarea);
    this.titulo = '';
    this.descripcion = '';
  }
}