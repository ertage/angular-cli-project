import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormsModule} from '@angular/forms'
import { Item } from '../item/Item'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  private title: string;
  private name: string = 'Tom';
  private items: Item[];
  private clicks:number = 0;

  constructor(){
    this.log(`constructor`)
    this.title = 'Hello';
    this.name = 'Tom';
    this.items = [
      { purchase: "Хлеб", done: false, price: 15.9 },
        { purchase: "Масло", done: false, price: 60 },
        { purchase: "Картофель", done: true, price: 22.6 },
        { purchase: "Сыр", done: false, price:310 }
    ]
  }
  
  private log(message: string){
    console.log(message);
  }
  
  ngOnInit(){
    this.log('onInit');
  }
  ngOnDestroy(){
    this.log(`onDestroy`)
  }

  addItem(text: string, price: number): void{
    if(text == null || text == undefined || text.trim() == '' || price == null || price == undefined){
      return;
    }else{
       this.items.push(new Item(text, price));
    }
      
  }

  onChanged(increased){
    increased==true?this.clicks++:this.clicks--;
  }
}
