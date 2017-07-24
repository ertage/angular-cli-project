import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { ChildComponent } from '../child-component/child-component.component';
import { DataService } from '../common/services/data.service';
import { Phone } from '../data/phone';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  private title: string;
  private name: string;
  private items: Phone[] = [];

  constructor(
    private dataService: DataService
  ){
    this.log(`constructor`)
    this.title = 'Angular';  
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

}
