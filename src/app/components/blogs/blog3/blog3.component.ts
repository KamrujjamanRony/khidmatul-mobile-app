import { Component } from '@angular/core';
import { Card1Component } from "../../shared/text/card1";
import { CustomButtonComponent } from '../../shared/custom-button/custom-button.component';
import { HeadingTextComponent } from "../../shared/heading-text/heading-text.component";

@Component({
    selector: 'app-blog3',
    standalone: true,
    templateUrl: './blog3.component.html',
    styleUrl: './blog3.component.css',
    imports: [Card1Component, CustomButtonComponent, HeadingTextComponent]
})
export class Blog3Component {

}
