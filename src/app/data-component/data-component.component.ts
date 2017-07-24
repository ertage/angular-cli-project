import { Component } from '@angular/core';

import { Phone } from '../data/phone';
import { DataService } from '../common/services/data.service';
import { LogService }  from '../common/services/log.service';

@Component({
  selector: 'data-comp',
  templateUrl: './data.component.html',
  providers: [DataService, LogService]
})

export class DataComponent{
   private items: Phone[] = [];

   constructor(private dataService: DataService){}
     
    addItem(name: string, price: number){
         
        this.dataService.addData(name, price);
    }
    ngOnInit(){
        this.items = this.dataService.getData();
    }
}