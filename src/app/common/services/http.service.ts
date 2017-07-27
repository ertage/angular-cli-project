import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import { Response, Headers, RequestOptions } from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import 'rxjs/add/operator/toPromise';
import { User } from '../../data/user';

@Injectable()
export class HttpService{

  
  private headers: Headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8'});
  private usersUrl: string  = 'api/users';

  constructor(
    private http: Http
  ){}

  getUsers(): Observable<User[]>{
    return this.http.get(this.usersUrl)
                .map((response: Response) =>{
                  let users: User[] = response.json().data;
                      return users;
                })
                .catch((error: any) => {
                  return Observable.throw(error)
                });
  }

  getUser(id: number):Promise<User>{
    const url = `${this.usersUrl}/${id}`;

    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data)
      
  }

  postData(user: User){
    const body=  JSON.stringify(user);

    return this.http.post(this.usersUrl, body, {headers: this.headers})
                    .map((response:Response) => response.json().data);
  }

  deleteData(id: number){
    const url = `${this.usersUrl}/${id}`;

    return this.http.delete(url, {headers: this.headers})
                    .map(()=>null);
  }
}