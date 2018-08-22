import { Component, OnInit } from '@angular/core';
import {ItemComponent, ItemNote} from "../ItemComponent";
import {ItemAddVar} from "./ItemAddVar";
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {FormControl} from '@angular/forms';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {forwardRef} from '@angular/core';

@Component({
  selector: 'app-add-var',
  templateUrl: './add-var.component.html',
  styleUrls: ['./add-var.component.css']
})
export class AddVarComponent extends ItemComponent implements OnInit {

  varName = new FormControl('', [Validators.required, Validators.pattern("[_a-z][_a-zA-Z0-9]*")]);

  getErrorMessage() {
    return this.varName.hasError('required') ? '变量名不能为空' :
      this.varName.hasError('pattern') ? '变量名无效 [_a-z][_a-zA-Z0-9]* ' :
        '';
  }
  constructor() {
    super();
  }


  itemAddVar = new ItemAddVar();


  ngOnInit() {
  }
  done():void{

  }

}
@Component({
  selector: 'note-add-var',
  templateUrl: './add-var.note.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AddVarNote),
      multi: true
    }
  ],
})
export class AddVarNote extends ItemNote{

}
