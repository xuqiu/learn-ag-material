import { Injectable } from '@angular/core';
import {of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }

  list():any{
    return of([
      {
        name:"平台管理",
        url:"/dashboard"
      },
      {
        name:"SoapUI联调",
        url:"/soupui"
      },
      {
        name:"接入流程配置",
        url:"/access-flow"
      },
      {
        name:"平台管理",
        url:"/dashboard"
      },
      {
        name:"平台管理",
        url:"/dashboard"
      },
      {
        name:"平台管理",
        url:"/dashboard"
      },
      {
        name:"平台管理",
        url:"/dashboard"
      },
      {
        name:"平台管理",
        url:"/dashboard"
      },
      {
        name:"平台管理",
        url:"/dashboard"
      },
      {
        name:"平台管理",
        url:"/dashboard"
      },
      {
        name:"平台管理",
        url:"/dashboard"
      },
      {
        name:"平台管理",
        url:"/dashboard"
      },
      {
        name:"平台管理",
        url:"/dashboard"
      },
      {
        name:"平台管理",
        url:"/dashboard"
      },
      {
        name:"平台管理",
        url:"/dashboard"
      },
      {
        name:"平台管理",
        url:"/dashboard"
      },
      {
        name:"平台管理",
        url:"/dashboard"
      },
      {
        name:"平台管理",
        url:"/dashboard"
      },
    ]);
  }
}
