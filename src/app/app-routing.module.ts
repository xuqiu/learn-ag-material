import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PlatsComponent }      from './plats/plats.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { PlatDetailComponent }  from './plat-detail/plat-detail.component';
import {SoupuiComponent} from "./soupui/soupui.component";
import {AccessFlowComponent} from "./access-flow/access-flow.component";

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: PlatDetailComponent },
  { path: 'plats', component: PlatsComponent},
  { path: 'soupui', component: SoupuiComponent },
  { path: 'access-flow', component: AccessFlowComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
