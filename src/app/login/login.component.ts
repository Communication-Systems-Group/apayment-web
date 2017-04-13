import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../shared/services/authentication.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    model: any = {};
    returnURL: string;
    errMsg: string;

    constructor(private route: ActivatedRoute, private router: Router, private authenticationService: AuthenticationService) {
    }

    ngOnInit() {
        // get return url from route parameters or default to '/'
        this.returnURL = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    login() {
        this.authenticationService.login(this.model.username, this.model.password).subscribe(
            data => {
                this.router.navigate([this.returnURL]);
            },
            error => {
                this.errMsg = 'Username and password do not match.';
                // TODO: Handle error
                console.log('Error login: ' + error.toString());
            }
        );
    }
}
