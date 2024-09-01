import { Component } from '@angular/core';
import { HeadingTextComponent } from "../../components/shared/heading-text/heading-text.component";

@Component({
  selector: 'app-notice',
  standalone: true,
  imports: [HeadingTextComponent],
  templateUrl: './notice.component.html',
  styleUrl: './notice.component.css'
})
export class NoticeComponent {

}
