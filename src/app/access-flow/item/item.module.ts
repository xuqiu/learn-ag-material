import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import {WsCallComponent} from "./ws-call/ws-call.component";
import {AddVarComponent, AddVarNote} from './add-var/add-var.component';
import {MaterialModule} from "../../material/material.module";
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {ItemNote} from "./ItemComponent";
import {AccessFlowComponent} from "../access-flow.component";

@NgModule({
  imports: [
    CommonModule,MaterialModule,FormsModule,ReactiveFormsModule,
  ],
  declarations: [AccessFlowComponent,ItemNote,WsCallComponent,AddVarComponent,AddVarNote],
  entryComponents:[WsCallComponent,AddVarComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class ItemModule { }
