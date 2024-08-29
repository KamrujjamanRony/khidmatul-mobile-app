import { Component, inject } from '@angular/core';
import { JsonDataService } from '../../../features/services/json-data.service';
import { ArabicCardComponent } from '../../../components/shared/arabic-card/arabic-card.component';
import { CustomButtonComponent } from '../../../components/shared/custom-button/custom-button.component';
import { ScrollComponent } from "../../../components/scroll/scroll.component";
import { HeadingTextComponent } from "../../../components/shared/heading-text/heading-text.component";

@Component({
  selector: 'app-forty-dorud',
  standalone: true,
  imports: [ArabicCardComponent, CustomButtonComponent, ScrollComponent, HeadingTextComponent],
  templateUrl: './forty-dorud.component.html',
  styleUrl: './forty-dorud.component.css'
})
export class FortyDorudComponent {
  jsonDataService = inject(JsonDataService);
  arabicLanguage: any;
  isPlay: any = false;
  selectedArabic: boolean = false;
  selectedBangla: boolean = false;
  selectedDescribe: boolean = false;
  expandedIndex: number | null = null;

  handleExpand(index: number) {
    this.expandedIndex = this.expandedIndex === index ? null : index; // Toggle the current index
  }

  toggleArabic() {
    this.selectedArabic = !this.selectedArabic;
  }

  toggleBangla() {
    this.selectedBangla = !this.selectedBangla;
  }

  toggleDescribe() {
    this.selectedDescribe = !this.selectedDescribe;
  }

  ngOnInit() {
    this.jsonDataService.getArabicData().subscribe(data => {
      this.arabicLanguage = data?.fortyDorud;
    });
  }

  toggleCollapse(index: number): void {
    this.arabicLanguage[index].isExpanded = !this.arabicLanguage[index].isExpanded;
  }

}
