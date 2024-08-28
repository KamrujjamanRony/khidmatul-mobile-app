import { Component, inject } from '@angular/core';
import { ArabicCardComponent } from '../../../components/shared/arabic-card/arabic-card.component';
import { JsonDataService } from '../../../features/services/json-data.service';
import { CustomButtonComponent } from '../../../components/shared/custom-button/custom-button.component';

@Component({
  selector: 'app-monjil',
  standalone: true,
  imports: [ArabicCardComponent, CustomButtonComponent],
  templateUrl: './monjil.component.html',
  styleUrl: './monjil.component.css'
})
export class MonjilComponent {
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
      this.arabicLanguage = data?.monjil;
    });
  }

  toggleCollapse(index: number): void {
    this.arabicLanguage[index].isExpanded = !this.arabicLanguage[index].isExpanded;
  }

}
