import {Injectable} from '@angular/core';
import {Http, RequestOptions, Headers, Response} from '@angular/http';
import {DPRequest} from '../models/dp-request.model';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {environment} from '../../../environments/environment';

@Injectable()
export class DPRequestService {

    private dpRequestsURL = '/request'; // URL to web api
    constructor(private http: Http) {
    }


    create(dpRequest: DPRequest): Observable<DPRequest> {
        const url = environment.apiURL + this.dpRequestsURL;
        return this.http.post(url, dpRequest, this.jwt()).map((response: Response) => response.json());
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
