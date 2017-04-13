import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {environment} from '../../../environments/environment';

@Injectable()
export class AuthenticationService {
    authenticationURL = '/user/login';

    constructor(private http: Http) {
    }

    login(username: string, password: string) {
        return this.http.post(environment.apiURL + this.authenticationURL, JSON.stringify({username: username, password: password})).map(
            (response: Response) => {
                // login successful if there's a jwt token in the response
                const user = response.json();
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('jwtToken', JSON.stringify(user));
                }
            }
        );
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('jwtToken');
    }
}
