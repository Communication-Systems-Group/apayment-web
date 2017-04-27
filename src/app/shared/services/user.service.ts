import {Http, Response} from '@angular/http';
import {Injectable} from '@angular/core';
import {User} from '../models/user.model';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {AuthHttp} from 'angular2-jwt';


@Injectable()
export class UserService {

    private userURL = '/user'; // URL to web api
    constructor(private http: Http,
                private authHttp: AuthHttp) {
    }

    create(user: User): Observable<User> {
        const url = environment.apiURL + this.userURL + '/register';
        return this.http.post(url, user).map((response: Response) => response.json());
    }

    getProfile(): Observable<User> {
        const url = environment.apiURL + this.userURL + '/profile';
        return this.authHttp.get(url).map((response: Response) => response.json());
    }

    getUserByRole(rolename: string): Observable<User[]> {
        const url = environment.apiURL + this.userURL + '/?role=' + rolename;
        return this.authHttp.get(url).map((response: Response) => response.json());
    }

    // private handleError(error: any) {
    //     // In a real world app, we might use a remote logging infrastructure
    //     // We'd also dig deeper into the error to get a better message
    //     let errMsg = (error.message) ? error.message :
    //         error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    //     console.error(errMsg); // log to console instead
    //     return Observable.throw(errMsg);
    // }

}
