import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {environment} from '../../../environments/environment';
import {JwtHelper, tokenNotExpired} from 'angular2-jwt';
import {Subject} from 'rxjs/Subject';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class AuthenticationService {
    authenticationURL = '/user/login';
    jwtHelper: JwtHelper = new JwtHelper();

    private _isLoggedIn: Subject<boolean> = new BehaviorSubject<boolean>(false);

    constructor(private http: Http) {
    }

    login(username: string, password: string) {
        return this.http.post(environment.apiURL + this.authenticationURL, JSON.stringify({
            username: username,
            password: password
        })).map(
            (response: Response) => {
                // login successful if there's a jwt token in the response
                const user = response.json();
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('user', JSON.stringify(user));
                    localStorage.setItem('token', user.token);
                }
            }
        );
    }


    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    }

    isLoggedIn() {
        this.loggedIn() && this._isLoggedIn.next(true);
        !this.loggedIn() && this._isLoggedIn.next(false);
        return this._isLoggedIn.asObservable();
    }

    loggedIn() {
        return tokenNotExpired();
    }

    hasRole(rolenames: string[]): boolean {
        for (const rolename of rolenames) {
            if (this.jwtHelper.decodeToken(localStorage.getItem('token')).roles.indexOf(rolename) > -1) {
                return true;
            }
        }
        return false;
    }
}
