import { Component, OnInit  } from '@angular/core';
import { FormsModule} from '@angular/forms'
import { Item } from '../item/Item'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private title: string;
  private name: string = '';
  private items: Item[];

  constructor(){
    this.title = 'Hello'
    this.items = [
      { purchase: "Хлеб", done: false, price: 15.9 },
        { purchase: "Масло", done: false, price: 60 },
        { purchase: "Картофель", done: true, price: 22.6 },
        { purchase: "Сыр", done: false, price:310 }
    ]
  }
  
  ngOnInit(){
  }

  addItem(text: string, price: number): void{
    if(text == null || text == undefined || text.trim() == '' || price == null || price == undefined){
      return;
    }else{
       this.items.push(new Item(text, price));
    }
      
  }
}
