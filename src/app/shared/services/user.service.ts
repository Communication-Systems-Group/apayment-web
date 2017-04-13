import {Http, RequestOptions, Response, Headers} from '@angular/http';
import {Injectable} from '@angular/core';
import {User} from '../models/user.model';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class UserService {

    private userURL = '/user'; // URL to web api
    constructor(private http: Http) {
    }

    create(user: User): Observable<User> {
        const url = environment.apiURL + this.userURL + '/register';
        return this.http.post(url, user).map((response: Response) => response.json());
    }

    getProfile(): Observable<User> {
        const url = environment.apiURL + this.userURL + '/profile';
        return this.http.get(url, this.jwt()).map((response: Response) => response.json());
    }

    private handleError(error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }

    // private helper methods
    private jwt(): RequestOptions {
        // create authorization header with jwt token
        const jwtToken = JSON.parse(localStorage.getItem('jwtToken'));
        if (jwtToken && jwtToken.token) {
            const headers = new Headers({'Authorization': jwtToken.token});
            return new RequestOptions({headers: headers});
        }
    }
}
