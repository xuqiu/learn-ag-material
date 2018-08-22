import { Component, OnInit } from '@angular/core';
import { Plat } from '../plat';
import { PlatService } from '../plat.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  plats: Plat[] = [];

  constructor(private platService: PlatService) { }

  ngOnInit() {
    this.getPlats();
  }

  getPlats(): void {
    this.platService.getPlats()
      .subscribe(plats => this.plats = plats.slice(1, 5));
  }
}
