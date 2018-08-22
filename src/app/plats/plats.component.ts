import { Component, OnInit } from '@angular/core';
import { Plat } from '../plat';
import { PlatService } from '../plat.service';

@Component({
  selector: 'app-plats',
  templateUrl: './plats.component.html',
  styleUrls: ['./plats.component.css']
})
export class PlatsComponent implements OnInit {
  plats: Plat[];
  constructor(private platService: PlatService) { }
  getPlats(): void {
    this.platService.getPlats().subscribe(plats => this.plats = plats);
  }
  ngOnInit() {
    this.getPlats();
  }
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.platService.addPlat({ name } as Plat)
      .subscribe(plat => {
        this.plats.push(plat);
      });
  }
  delete(plat: Plat): void {
    this.plats = this.plats.filter(h => h !== plat);
    this.platService.deletePlat(plat).subscribe();
  }
}
