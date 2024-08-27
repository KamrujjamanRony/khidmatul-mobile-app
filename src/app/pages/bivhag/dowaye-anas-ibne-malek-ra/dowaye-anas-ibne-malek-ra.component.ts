import { Component } from '@angular/core';

@Component({
  selector: 'app-dowaye-anas-ibne-malek-ra',
  standalone: true,
  imports: [],
  templateUrl: './dowaye-anas-ibne-malek-ra.component.html',
  styleUrl: './dowaye-anas-ibne-malek-ra.component.css'
})
export class DowayeAnasIbneMalekRaComponent {
  arabicLanguage: any;
  isPlay: boolean = false;
  selectedArabic: boolean = false;
  selectedBangla: boolean = false;
  selectedDescribe: boolean = false;

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
