import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'boton-rh',
  standalone: true,
  templateUrl: './boton-rh.component.html',
  styleUrls: ['./boton-rh.component.css'],
  imports: [CommonModule],
})
export class BotonRhComponent {
  @Input() etiqueta: string = 'Click';
  @Input() color: string = 'btn-rojo';
  @Input() redondeado: boolean = false;
  @Input() textoElevado: boolean = false;
  @Input() soloIcono?: boolean = false;
  @Input() icono?: string;

}

