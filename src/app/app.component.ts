import { Component } from '@angular/core';
import data from '../assets/prueba.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  title = 'pruebaAngular';
  usuario = '';
  

  /*esta funcion se ejecutara cuando el hijo(saludo component) se pulse un boton */
  recibirMensajeDelHijo(evento: string){
    alert(evento);
  }

  firstWay(){
    console.log(data);
  } 
}
