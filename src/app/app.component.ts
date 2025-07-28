import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BotonRhComponent } from './shared/components/boton-rh/boton-rh.component';
import { botones, botonesDelineados, botonesRedondeados, botonesTextoElevado } from './shared/components/listabotones';
import { CommonModule } from '@angular/common';
import { BotonInterface } from './interfaces/Botones.interface';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BotonRhComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'libreria-rh';

  botones: BotonInterface[] = botones;
  botonesDelineados: BotonInterface[] = botonesDelineados;
  botoneredondeado: BotonInterface[] = botonesRedondeados;
  botonesTextoElevado: BotonInterface[] = botonesTextoElevado;


  ejecutarAccion(etiqueta: string) {
    console.log(`Boton ${etiqueta} presionado`);
  }

  onSubmit() {
    console.log('Formulario enviado');
  }
}
