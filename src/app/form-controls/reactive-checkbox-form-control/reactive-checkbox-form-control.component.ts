import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ControlContainer, ControlValueAccessor, FormControl, FormControlDirective, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'reactive-checkbox-form-control',
  template: `
  {{ label }}
  <div *ngFor="let option of options"  class="form-control form-check">
    <input type="checkbox" [formControl]="control" [value]="option"/>&nbsp;{{ option }}
  </div>`,
  styleUrls: ['./../reactive-form-control.component.css'],
  providers: [
    {provide: NG_VALUE_ACCESSOR,
    useExisting: ReactiveCheckboxFormControlComponent,
    multi: true}]
})
export class ReactiveCheckboxFormControlComponent implements ControlValueAccessor {

    
    @Input() label;
    @Input() placeHolder;
    @Input() required;
    @Input() errorMsg;
    @Input() options;

    @ViewChild(FormControlDirective, {static: true}) formControlDirective: FormControlDirective;
    @Input() formControl: FormControl;
    @Input() formControlName: string;  

    constructor(private controlContainer: ControlContainer) { }

    get control() {
      return this.formControl || this.controlContainer.control.get(this.formControlName);
    }
  
    clearInput() {
      this.control.setValue('');
    }
  
    registerOnTouched(fn: any): void {
      this.formControlDirective.valueAccessor.registerOnTouched(fn);
    }
  
    registerOnChange(fn: any): void {
      this.formControlDirective.valueAccessor.registerOnChange(fn);
    }
  
    writeValue(obj: any): void {
      this.formControlDirective.valueAccessor.writeValue(obj);
    }
  
    setDisabledState(isDisabled: boolean): void {
      this.formControlDirective.valueAccessor.setDisabledState(isDisabled);
    }
}