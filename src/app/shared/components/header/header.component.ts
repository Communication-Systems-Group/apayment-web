import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {User} from '../../models/user.model';
import {AuthenticationService} from '../../services/authentication.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    providers: [UserService]
})
export class HeaderComponent implements OnInit {
    user: User;

    constructor(private router: Router, private userService: UserService, private authenticationService: AuthenticationService) {

    }

    ngOnInit() {
        this.getProfile();
    }

    getProfile() {
        this.userService.getProfile().subscribe(
            user => {
                this.user = user;
                console.log(user.tvd);
            },
            error => {
                console.error(error);
                console.error('Error fetching user profile');
            }
        );
    }

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('push-right');
    }

    logout() {

        this.router.navigate(['login']);
        this.authenticationService.logout();
    }

    // rltAndLtr() {
    //     const dom: any = document.querySelector('body');
    //     dom.classList.toggle('rtl');
    // }
}
