import { Component, OnInit, Input, Output, EventEmitter, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent implements OnInit, OnDestroy, OnChanges {

  @Input() nombre: string = ""; /*informacion de padres a hijos */
  @Input() apellido: string = ""; /*informacion de hijos a padres */
  @Output() mensajeEmitter: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    // isntrucciones previas a la renderizacion del componente
    console.log("ngOnInit del componente saludo")
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges el componente recibe cambios", changes)
  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy el componente va a desaparecer")
  }

  



  // Ejemplo para gestionar un evento de tipo click en el DOM y enviar mensaje al componente padre

  enviarMensajeAlPadre(): void{
    // alert(`Hola, ${this.nombre} ${this.apellido}. Alerta despachada desde un click de boton`);
    this.mensajeEmitter.emit(`Hola, ${this.nombre} ${this.apellido}. Alerta despachada desde un click de boton`);
  }



  
}
