import { Component } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Observable} from 'rxjs';
import {MenuService} from "./menu.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    private menuService: MenuService,
  ) {}
  ngOnInit() {
    this.getMenuList();
  }
  title = '平台管理';
  isActive = true;
  menuList;
  getMenuList(): void {
    this.menuService.list()
      .subscribe(menuList => this.menuList = menuList);
  }

}
