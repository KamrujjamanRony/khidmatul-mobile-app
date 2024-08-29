import { Component } from '@angular/core';
import { CustomButtonComponent } from '../../../components/shared/custom-button/custom-button.component';
import { ScrollComponent } from "../../../components/scroll/scroll.component";
import { ArabicCardComponent } from "../../../components/shared/arabic-card/arabic-card.component";
import { HeadingTextComponent } from "../../../components/shared/heading-text/heading-text.component";

@Component({
  selector: 'app-doyaye-abu-darda-ra',
  standalone: true,
  imports: [CustomButtonComponent, ScrollComponent, ArabicCardComponent, HeadingTextComponent],
  templateUrl: './doyaye-abu-darda-ra.component.html',
  styleUrl: './doyaye-abu-darda-ra.component.css'
})
export class DoyayeAbuDardaRaComponent {
  arabicLanguage: any;
  isPlay: any = false;
  selectedArabic: boolean = false;
  selectedBangla: boolean = false;
  selectedDescribe: boolean = false;
  expandedIndex: number | null = null;
  arabic = {
    "id": 1,
    "arabic": "اَللّٰهُمَّ َ اَنْتَ رَبِّيْ  لَا اِلٰهَ اِلَّا اَنْتَ عَلَيْكَ  تَوَ كَّلْتُ وَاَنْتَ  رَبُّ  الْعَرْشِ الْكَرِيْمِ مَا شَاءَ اللهُ كَانَ  وَمَا لَمْ يَشَأْ لَمْ يَكُنْ  وَلَا حَوْلَ  وَلَا  قُوَّة َ  اِلَّا  بِاللهِ  الْعَلِيِّ  الْعَظِيْمِ اَعْلَمُ اَنَّ اللهَ عَلَى كُلِّ شَيْءٍ قَدِيْرٌ  وَأَنَّ اللهَ  قَدْ اَحَاطَ بِكُلِّ  شَيْءٍ  عِلْمًا. اَللّٰهُمَّ  اِنِّيْ  اَعُوْذُ بِكَ  مِنْ  شَرِّ نَفْسِيْ  وَمِنْ شَرِّ كُلِّ  دَآبَّةٍ اَنْتَ اٰخِذٌ بِۢنَا صِيَتِهَا اِنَّ  رَبِّيْ  عَلَى صِرَاطٍ مُّسْتَقِيْمٍ",
    "bangla_meaning": "",
    "bangla_explanation": "",
    "audio": "assets/audio/FortyDorood/40-Durood-1.mp3"
  }

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
    console.log(this.selectedDescribe)
  }

  togglePlay() {
    const player = document.getElementById('player') as HTMLAudioElement;
    if (this.isPlay) {
      player.pause();
    } else {
      player.play();
    }
    this.isPlay = !this.isPlay;
  }

  toggleCollapse(index: number): void {
    this.arabicLanguage[index].isExpanded = !this.arabicLanguage[index].isExpanded;
  }

}
