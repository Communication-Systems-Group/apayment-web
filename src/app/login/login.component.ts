import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../shared/services/authentication.service';
import {NotificationsService} from 'angular2-notifications/dist';

@Component({
               selector: 'app-login',
               templateUrl: './login.component.html',
               styleUrls: ['./login.component.scss']
           })
export class LoginComponent implements OnInit {
    model: any = {};
    returnURL: string;
    errMsg: string;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private authenticationService: AuthenticationService,
                private notify: NotificationsService) {
    }

    ngOnInit() {
        // get return url from route parameters or default to '/'
        this.returnURL = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    login() {
        this.authenticationService.login(this.model.username, this.model.password).subscribe(
            data => {
                this.notify.success('Login successful', 'You now have access to your profile.',
                                    {});
                this.router.navigate([this.returnURL]);
            },
            error => {
                // this.errMsg = '';
                this.notify.error('Login failed', 'Username and password do not match.', {});
                // TODO: Handle error
                console.log('Error login: ' + error.toString());
            }
        );
    }
}
