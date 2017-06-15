import {Http, Response} from '@angular/http';
import {Injectable} from '@angular/core';

import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {AuthHttp} from 'angular2-jwt';


@Injectable()
export class APaymentTokenService {

    private apaymentTokenURL = '/apaymenttoken'; // URL to web api
    constructor(private http: Http,
                private authHttp: AuthHttp) {
    }

    transfer(aPaymentTokenTransfer: Object): Observable<Object> {
        const url = environment.apiURL + this.apaymentTokenURL;
        return this.authHttp.post(url, aPaymentTokenTransfer).map((response: Response) => response.json());
    }
}
