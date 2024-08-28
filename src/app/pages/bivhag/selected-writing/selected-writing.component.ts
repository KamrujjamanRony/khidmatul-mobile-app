import { Component } from '@angular/core';
import { Card2Component } from '../../../components/shared/text/card2';
import { CustomButtonComponent } from '../../../components/shared/custom-button/custom-button.component';

@Component({
  selector: 'app-selected-writing',
  standalone: true,
  imports: [Card2Component, CustomButtonComponent],
  templateUrl: './selected-writing.component.html',
  styleUrl: './selected-writing.component.css'
})
export class SelectedWritingComponent {

}
