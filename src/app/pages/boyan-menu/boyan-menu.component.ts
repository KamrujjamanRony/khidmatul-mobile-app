import { Component } from '@angular/core';
import { CustomButtonComponent } from '../../components/shared/custom-button/custom-button.component';

@Component({
  selector: 'app-boyan-menu',
  standalone: true,
  imports: [CustomButtonComponent],
  templateUrl: './boyan-menu.component.html',
  styleUrl: './boyan-menu.component.css'
})
export class BoyanMenuComponent {

}
