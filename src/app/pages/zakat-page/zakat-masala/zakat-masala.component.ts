import { Component } from '@angular/core';
import { Card2Component } from "../../../components/shared/text/card2";
import { CustomButtonComponent } from '../../../components/shared/custom-button/custom-button.component';

@Component({
    selector: 'app-zakat-masala',
    standalone: true,
    templateUrl: './zakat-masala.component.html',
    styleUrl: './zakat-masala.component.css',
    imports: [Card2Component, CustomButtonComponent]
})
export class ZakatMasalaComponent {

}
