import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {DPRequest} from '../models/dp-request.model';
import {Observable} from 'rxjs';

@Injectable()
export class DPRequestService {

    private dpRequestsUrl = 'app/heroes'; // URL to web api
    constructor(private http: Http) { }



    getDPRequests(): Observable<DPRequest[]> {
        return this.http.get(this.dpRequestsUrl)
        .map(this.extractData)
        .catch(this.handleError);
    }

    getDPRequest(id: number): Observable<DPRequest> {
        return this.http.get(this.dpRequestsUrl)
        .map(this.extractData)
        .catch(this.handleError);
    }

    save(dpRequest: DPRequest): Observable<DPRequest> {
        return this.http.get(this.dpRequestsUrl)
        .map(this.extractData)
        .catch(this.handleError);
    }

    private extractData(res: Response) {
        const body = res.json();
        return body.data || { };
    }

    private handleError (error: Response | any) {
        // In a real world app, you might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}
