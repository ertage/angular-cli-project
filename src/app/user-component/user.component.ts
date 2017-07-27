import { Component} from '@angular/core';
import { ActivatedRoute, ParamMap  } from '@angular/router';

import { User } from '../data/user';
import { HttpService } from '../common/services/http.service';

@Component({
    selector: 'user-detail',
    templateUrl: './user.component.html'
})
export class UserComponent { 
    private user: User;
    private userId: number;

    constructor(
    private htpService: HttpService,
    private route: ActivatedRoute
    ) {}

    ngOnInit(): void{

        this.route.params
                .subscribe(params => {
                     this.userId = params['id'];
        });

        this.htpService.getUser(this.userId)
                    .then((user) => this.user = user)

        console.log(this.user)
    }

     
}