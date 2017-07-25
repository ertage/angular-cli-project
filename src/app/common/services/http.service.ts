import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import { Response} from '@angular/http';
import { User } from '../../data/user';

@Injectable()
export class HttpService{
  constructor(
    private http: Http
  ){
  }

  getData(){
    return this.http.get('assets/user.json')
    }
}