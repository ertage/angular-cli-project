import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Response} from '@angular/http';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { DataService } from '../common/services/data.service';
import { HttpService } from '../common/services/http.service';
import { userNameValidator } from '../common/validators/user-name-validator.validator';

import { Phone } from '../data/phone';
import { User } from '../data/user';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
  
@Component({
    selector: 'home-app',
    templateUrl: './home.component.html'
})
export class HomeComponent {

  private users: User[];
  private user: User = new User();
  private recievedUser: User;
  private error: any;
  private myForm: FormGroup;
  private currentDate: NgbDateStruct;

  constructor(
    private dataService: DataService,
    private formBuilder: FormBuilder,
    private httpService: HttpService,
    private router: Router
  ){
    this.createForm();
    
  }

  createForm(){
    this.myForm = this.formBuilder.group({
      'name': ['Tom', Validators.required],
      'age': [25, Validators.required],
      'email': ['test@test.com', [ Validators.required, Validators.pattern("[a-zA-Z_]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}")]]
    })
  }

  ngOnInit(){
    this.httpService.getUsers()
                    .subscribe(
                      (response) => this.users = response,
                      (error) => {this.error = error, console.log(error)}
                    );

  }


  submit(myForm){
    const formModel = this.myForm.value;
    this.httpService.postData(formModel)
                    .subscribe((response) => {
                        this.users.push(response);
                      }
                    )
  }

  delete(user: User){
    this.httpService.deleteData(user.id)
                    .subscribe(()=>{
                      this.users = this.users.filter(item => item != user)
                    })
  }

  onSelect(user: User){
    this.router.navigate(['/userDetail', user.id])
  }

 }