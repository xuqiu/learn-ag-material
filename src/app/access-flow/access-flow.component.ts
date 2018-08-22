import { Component, OnInit, ComponentFactoryResolver } from '@angular/core';
import { Constants} from "./Constants";
import {MatDialog}from '@angular/material';
import {WsCallComponent} from "./item/ws-call/ws-call.component";
import {AddVarComponent} from "./item/add-var/add-var.component";
import {Item} from "./item/Item";

@Component({
  selector: 'app-access-flow',
  templateUrl: './access-flow.component.html',
  styleUrls: ['./access-flow.component.css']
})
export class AccessFlowComponent implements OnInit {
  options = Constants.staticOptions;

  constructor(public dialog: MatDialog,private resolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.testInit()
  }

  /**
   * 测试初始化
   */
  testInit(){
    //选择第一步内容
    this.step=2;
    this.service=this.options.serviceMethodOptions[2];
    this.method=this.service.methods[0];
    //this.addFlowItem(this.options.flowItemType['addVar']);
  }

  /**
   * 步骤
   */
  step=1;
  /**
   * 服务
   */
  service;
  /**
   * 方法
   */
  method;
  /**
   * 新增item类型
   */
  newItemType;

  args = ['arg1','arg2'];

  flowItems:Item[]=[];

  /**
   * 选定方法后确认
   */
  setMethod():void{
    this.step = 2;
  }

  /**
   * 重置到指定步骤
   */
  reset(step:number):void{
    this.step=step;
    switch (this.step){
      case 1 :
        this.service=null;
        this.method=null;
      case 2:
        this.flowItems=[];
    }
  }

  addFlowItem(itemType):void{
    let item;
    switch (itemType.type) {
      case 1:item=AddVarComponent;break;
      case 5:item=WsCallComponent;break;
      default:
        console.error("unsupported operation!");
        return;
    }

    let dialogRef = this.dialog.open(item, {
      width: '85%',
      data: { args: this.args}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.newItemType=null;
      console.log(result);
      if(result){
        this.flowItems.push(result);
      }
    });
    itemType = null;
  }

}
