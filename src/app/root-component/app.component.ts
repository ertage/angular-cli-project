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
  private user: User = new User();
  private recievedUser: User;
  private error: any;
  constructor(
    private dataService: DataService,
    private httpService: HttpService
  ){
    this.log(`constructor`)
    this.title = 'Angular';  
    this.user.name = "Tom";
    this.user.age = 25;
    this.user.email = "test@test.com"
  }

  private log(message: string){
    console.log(message);
  }

  ngOnInit(){
    this.log('onInit');
    this.httpService.getData()
                    .subscribe(
                      (response) => this.users = response,
                      (error) => {this.error = error, console.log(error)}
                    );
  }


  submit(user){
    this.httpService.postData(user)
                    .subscribe((response) => {
                        this.users.push(response);
                      }
                    )
  }

  ngOnDestroy(){
    this.log(`onDestroy`)
  }

}
