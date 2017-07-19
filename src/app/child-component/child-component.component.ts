import { Component } from '@angular/core'


@Component({
  selector: 'child-comp',
  template: `
    <div [ngClass]="{segoePrintFont:true}">{{name}}</div>
  `,
  styles: [
        `.verdanaFont{font-size:13px; font-family:Verdana;}
        .segoePrintFont{font-size:14px; font-family:"Segoe Print";}`
    ]
})

export class ChildComponent{
  
  name: string ="Child component"
}