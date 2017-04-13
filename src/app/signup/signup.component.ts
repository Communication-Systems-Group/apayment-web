import {Component, OnInit} from '@angular/core';
import {UserService} from '../shared/services/user.service';
import {Router} from '@angular/router';
import {Plant} from '../shared/models/plant.model';
import {User} from '../shared/models/user.model';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
    // model: any = {firstname: 'test', lastname: 'test', username: 'test', password: 'test'};
    // model: any= {plant:{}};

    usermodel: User;

    errMsg: string;

    constructor(private userService: UserService, private router: Router) {
        this.usermodel = new User();
    }

    ngOnInit() {
    }

    register() {
        this.userService.create(this.usermodel).subscribe(
            data => {
                this.router.navigate(['/login']);
            },
            error => {
                this.errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';

                // ToDo: Handle error
                console.log('Error while registration call' + error.message);
            }
        );
    }
}
