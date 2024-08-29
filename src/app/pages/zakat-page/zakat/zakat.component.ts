import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ZakatService } from '../../../features/services/zakat.service';
import { BengaliDatePipe } from "../../../features/pipe/bengali-date.pipe";
import { BanglaPipe } from "../../../features/pipe/bangla.pipe";
import { LoadingComponent } from '../../../components/shared/loading/loading.component';
import { NetworkStatusService } from '../../../features/services/network-status.service';
import { NetStatusComponent } from '../../../components/shared/net-status/net-status.component';
import { CustomButtonComponent } from '../../../components/shared/custom-button/custom-button.component';

@Component({
  selector: 'app-zakat',
  standalone: true,
  templateUrl: './zakat.component.html',
  styleUrl: './zakat.component.css',
  imports: [FormsModule, BengaliDatePipe, BanglaPipe, LoadingComponent, NetStatusComponent, CustomButtonComponent]
})
export class ZakatComponent {
  forayez: any;
  ZakatService = inject(ZakatService);
  networkStatusService = inject(NetworkStatusService);
  isOnline!: boolean;
  asset: string = 'ভরি';

  constructor() { }

  ngOnInit(): void {
    this.networkStatusService.onlineStatus$.subscribe(
      (status: boolean) => this.isOnline = status
    );
    console.log(this.isOnline)
    this.ZakatService.getZakat().subscribe(Response => {
      this.forayez = Response;
    })
  }

}
