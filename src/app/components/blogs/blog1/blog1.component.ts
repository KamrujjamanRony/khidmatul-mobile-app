import { Component } from '@angular/core';
import { Head1Component } from "../../shared/text/H1";
import { PComponent } from "../../shared/text/P";
import { Card1Component } from '../../shared/text/card1';
import { CustomButtonComponent } from '../../shared/custom-button/custom-button.component';

@Component({
    selector: 'app-blog1',
    standalone: true,
    templateUrl: './blog1.component.html',
    imports: [Head1Component, PComponent, Card1Component, CustomButtonComponent]
})
export class Blog1Component {

}
