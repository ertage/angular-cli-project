import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';

import { Phone } from '../data/phone';
import { DataService } from '../common/services/data.service';
import { LogService }  from '../common/services/log.service';

@Component({
  selector: 'data-comp',
  templateUrl: './data.component.html',
  providers: [DataService, LogService]
})

export class DataComponent{
  private phones: Phone[] = [];
  private item: Phone = new Phone("", 0, "Samsung");
  companies: string[] = ["Apple", "Huawei", "Xiaomi", "Samsung", "LG", "Motorola", "Alcatel"];

  constructor(private dataService: DataService){}

  ngOnInit(){
    this.phones = this.dataService.getData();
  }

  addPhone(name: NgModel, price: NgModel, company: NgModel){
    console.log(name);
    console.log(price);
    console.log(company);
    
    this.dataService.addData(name.value, price.value, company.value);
  }

  onTitleChange(){
    if(this.item.name == 'HD555'){
      this.item.name = 'Apple'
    }
  } 

}