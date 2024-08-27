import { Component } from '@angular/core';
import { CustomButtonComponent } from '../../components/shared/custom-button/custom-button.component';

@Component({
  selector: 'app-zakat-menu',
  standalone: true,
  imports: [CustomButtonComponent],
  templateUrl: './zakat.component.html',
  styleUrl: './zakat.component.css'
})
export class ZakatMenuComponent {

}
