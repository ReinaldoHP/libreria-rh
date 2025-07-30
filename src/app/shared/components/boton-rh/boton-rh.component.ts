import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'boton-rh',
  standalone: true,
  templateUrl: './boton-rh.component.html',
  styleUrls: ['./boton-rh.component.css'],
  imports: [CommonModule],
})
export class BotonRhComponent implements OnInit {
  @Input() etiqueta: string = 'Click';
  @Input() color: string = 'rojo';
  @Input() redondeado: boolean = false;
  @Input() textoElevado: boolean = false;
  @Input() soloIcono?: boolean = false;
  @Input() icono?: string;



  clasesBoton: string[] = []

  

  ngOnInit() {
    const clases = ['btn'];

    clases.push(this.color);

    if (this.redondeado) {
    }

    if (this.textoElevado){
      
    }

    if (this.soloIcono) {
      
    }

    this.clasesBoton = clases;
  }

}

