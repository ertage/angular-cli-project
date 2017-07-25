import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { Response} from '@angular/http';

import { ChildComponent } from '../child-component/child-component.component';

import { DataService } from '../common/services/data.service';
import { HttpService } from '../common/services/http.service';

import { Phone } from '../data/phone';
import { User } from '../data/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HttpService]
})
export class AppComponent implements OnInit, OnDestroy{
  private title: string;
  private users: User[];

  constructor(
    private dataService: DataService,
    private httpService: HttpService
  ){
    this.log(`constructor`)
    this.title = 'Angular';  
    
  }

  private log(message: string){
    console.log(message);
  }

  ngOnInit(){
    this.log('onInit');
    this.httpService.getData().subscribe((response: Response) => this.users = response.json());
  }
  ngOnDestroy(){
    this.log(`onDestroy`)
  }

}
