import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'child-comp',
  template: `
    <h2>Hello {{userName}}</h2>
    <input [ngModel]="userName" (ngModelChange)="onNameChange($event)" />"
  `,
  styles: ['h2, {color: red}']
})

export class ChildComponent{
  @Input() userName: string;

  @Output() userNameChange: EventEmitter<string> = new EventEmitter();

  onNameChange(model: string){
    this.userName = model;
    this.userNameChange.emit(model);
  }
}