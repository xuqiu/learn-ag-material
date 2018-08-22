import { Component, OnInit, Input } from '@angular/core';
import { Plat } from '../plat';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { PlatService }  from '../plat.service';

@Component({
  selector: 'app-plat-detail',
  templateUrl: './plat-detail.component.html',
  styleUrls: ['./plat-detail.component.css']
})
export class PlatDetailComponent implements OnInit {
  @Input() plat: Plat;
  constructor(private route: ActivatedRoute,
              private platService: PlatService,
              private location: Location) { }

  ngOnInit() {
    this.getPlat();
  }
  getPlat(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.platService.getPlat(id)
      .subscribe(plat => this.plat = plat);
  }

  goBack(): void {
    this.location.back();
  }
  save(): void {
    this.platService.updatePlat(this.plat)
      .subscribe(() => this.goBack());
  }
}
