import { Injectable } from '@angular/core';
import { Phone } from '../../data/phone';
import { LogService } from './log.service';

@Injectable()
export class DataService{

  private data: Phone[] = [
    { name: "iPhone 7", price: 2222},
    { name: "iPhone 8", price: 4444}
  ]

  constructor(
    private logService: LogService
  ){}

  getData(): Phone[]{
    this.logService.write("getting data");
    return this.data;
  }

  addData(name: string, price: number){
    this.data.push(new Phone(name, price));
  }
}