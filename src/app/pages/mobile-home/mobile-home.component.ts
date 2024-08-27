import { Component } from '@angular/core';
import { CustomButtonComponent } from '../../components/shared/custom-button/custom-button.component';

@Component({
  selector: 'app-mobile-home',
  standalone: true,
  imports: [CustomButtonComponent],
  templateUrl: './mobile-home.component.html',
  styleUrl: './mobile-home.component.css'
})
export class MobileHomeComponent {

}
