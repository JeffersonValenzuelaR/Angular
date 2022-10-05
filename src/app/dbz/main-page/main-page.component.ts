import { Component} from '@angular/core';
import { Personaje } from '../interfaces/personaje.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent{

  nuevo : Personaje = {
    nombre: 'Maestro Roshi',
    poder: 100000
  }

  
}
