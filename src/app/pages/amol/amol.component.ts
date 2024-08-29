import { Component } from '@angular/core';
import { CustomButtonComponent } from '../../components/shared/custom-button/custom-button.component';
import { ScrollComponent } from "../../components/scroll/scroll.component";
import { HeadingTextComponent } from "../../components/shared/heading-text/heading-text.component";

@Component({
  selector: 'app-amol',
  standalone: true,
  imports: [CustomButtonComponent, ScrollComponent, HeadingTextComponent],
  templateUrl: './amol.component.html',
  styleUrl: './amol.component.css'
})
export class AmolComponent {

}
