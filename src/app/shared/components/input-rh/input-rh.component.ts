import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule  } from '@angular/forms';

@Component({
  selector: 'input-rh',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule ],
  templateUrl: './input-rh.component.html',
  styleUrl: './input-rh.component.css'
})
export class InputRhComponent {
  @Input() etiqueta: string = '';
  @Input() tipo: string ='texto';
  @Input() marcador: string = '';
  @Input() control!: FormControl;
  @Input() required: boolean = false;

}

  

 

