import { Component, OnInit } from '@angular/core';
import { Response} from '@angular/http';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';

import { DataService } from '../common/services/data.service';
import { HttpService } from '../common/services/http.service';
import { userNameValidator } from '../common/validators/user-name-validator.validator';

import { Phone } from '../data/phone';
import { User } from '../data/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HttpService]
})
export class AppComponent implements OnInit{
  private title: string;
  
  constructor(
   
  ){
    this.title = 'Angular';
  }

  ngOnInit(){
   
  }
 
}
