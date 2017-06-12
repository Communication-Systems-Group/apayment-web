import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {DPRequest} from '../models/dp-request.model';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {environment} from '../../../environments/environment';
import {AuthHttp} from 'angular2-jwt';
import {Inspection} from '../models/inspection.model';

@Injectable()
export class DPRequestService {

    private dpRequestsURL = '/request'; // URL to web api
    constructor(private http: Http, private authHttp: AuthHttp) {
    }


    create(dpRequest: DPRequest): Observable<DPRequest> {
        const url = environment.apiURL + this.dpRequestsURL;
        return this.authHttp.post(url, dpRequest).map((response: Response) => response.json());
    }

    getAll(): Observable<DPRequest[]> {
        const url = environment.apiURL + this.dpRequestsURL;
        return this.authHttp.get(url).map((response: Response) => response.json());
    }

    getById(id: number): Observable<DPRequest> {
        const url = environment.apiURL + this.dpRequestsURL + '/' + id;
        return this.authHttp.get(url).map((response: Response) => response.json());
    }

    getAllForInspection(): Observable<DPRequest[]> {
        const url = environment.apiURL + this.dpRequestsURL + '/inspection';
        return this.authHttp.get(url).map((response: Response) => response.json());
    }

    addInspector(request: DPRequest): Observable<DPRequest> {
        const url = environment.apiURL + this.dpRequestsURL + '/inspector';
        return this.authHttp.put(url, request).map((response: Response) => response.json());
    }

    submitInspection(inspection: Inspection): Observable<any> {
        const url = environment.apiURL + this.dpRequestsURL + '/inspection';
        return this.authHttp.post(url, inspection).map((response: Response) => response.json());
    }

    updateGVE(request: DPRequest): Observable<DPRequest> {
        const url = environment.apiURL + this.dpRequestsURL + '/gve';
        return this.authHttp.put(url, request).map((response: Response) => response.json());
    }

    triggerPayment(request: DPRequest): Observable<DPRequest> {
        const url = environment.apiURL + this.dpRequestsURL + '/pay';
        return this.authHttp.put(url, request).map((response: Response) => response.json());
    }
}
