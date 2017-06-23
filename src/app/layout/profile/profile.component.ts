import {Component, OnInit} from '@angular/core';
import {UserService} from '../../shared/services/user.service';
import {User} from '../../shared/models/user.model';

@Component({
               selector: 'app-profile',
               templateUrl: './profile.component.html',
               styleUrls: ['./profile.component.scss'],
               providers: [UserService],
           })
export class ProfileComponent implements OnInit {
    user: User;

    constructor(private userService: UserService) {
    }

    ngOnInit() {

    }

    getProfile(): void {
        this.userService.getProfile().subscribe(
            profile => {
                this.user = profile;
            },
            error => {
                console.error(error);
            }
        );
    }

}
