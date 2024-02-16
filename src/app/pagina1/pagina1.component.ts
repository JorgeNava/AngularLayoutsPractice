import { Component } from '@angular/core';
import { DynamicLayoutComponent } from "../dynamic-layout/dynamic-layout.component";

@Component({
  selector: 'app-pagina1',
  standalone: true,
  imports: [DynamicLayoutComponent],
  templateUrl: './pagina1.component.html',
  styleUrl: './pagina1.component.scss'
})
export class Pagina1Component {

}
