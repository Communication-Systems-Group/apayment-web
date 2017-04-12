import {Component, OnInit} from '@angular/core';
import {UserService} from '../shared/services/user.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
    model: any = {firstname: 'test', lastname: 'test', username: 'test', password: 'test'};

    constructor(private userService: UserService, private router: Router) {
    }

    ngOnInit() {
    }

    register() {
        this.userService.create(this.model).subscribe(
            data => {
                console.log(data);
                this.router.navigate(['/login']);
            },
            error => {
                // ToDo: Handle error
                console.log('Error while registration call' + error);
            }
        );
    }
}
