import { ControlValueAccessor } from '@angular/forms/src/directives';
import {Item} from "./Item";
import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

export class ItemComponent{

}
@Component({
  selector: 'item-note',
  templateUrl: './item.note.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ItemNote),
      multi: true
    }
  ],
})
export class ItemNote implements ControlValueAccessor {
  protected innerValue: any=new Item();

  protected onTouchedCallback: () => void = function(){};
  protected onChangeCallback: (_: any) => void = function(){};
  get value(): any {
    return this.innerValue;
  }

  set value(v: any) {
    if (v !== this.innerValue) {
      this.innerValue = v;
      this.onChangeCallback(v);
    }
  }
  writeValue(value: any) {
    if (value !== this.innerValue) {
      this.innerValue = value;
    }
  }

  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }
  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }
}
