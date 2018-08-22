import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouteReuseStrategy} from '@angular/router';
import {AppRoutingCache} from './app-routing.cache';

import {AppComponent} from './app.component';
import {PlatsComponent} from './plats/plats.component';

import {FormsModule} from '@angular/forms';
import {PlatDetailComponent} from './plat-detail/plat-detail.component';
import {PlatService} from "./plat.service";
import {MessagesComponent} from './messages/messages.component';
import {MessageService} from './message.service';
import {AppRoutingModule} from './app-routing.module';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HttpClientModule} from '@angular/common/http';
import {PlatSearchComponent} from './plat-search/plat-search.component';
import {MaterialModule} from "./material/material.module";
import {SoupuiComponent} from './soupui/soupui.component';
import {ItemModule} from "./access-flow/item/item.module";

@NgModule({
  declarations: [
    AppComponent,
    PlatsComponent,
    PlatDetailComponent,
    MessagesComponent,
    DashboardComponent,
    PlatSearchComponent,
    SoupuiComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    ItemModule,
  ],
  providers: [PlatService, MessageService,{ provide: RouteReuseStrategy, useClass: AppRoutingCache }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
