import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Contribution} from '../models/contribution.model';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import {environment} from '../../../environments/environment';

@Injectable()
export class ContributionService {

    private contributionsURL = '/contribution'; // URL to web api
    constructor(private http: Http) { }


    getContributions(): Observable<Contribution[]> {
        return this.http.get(environment.apiURL + this.contributionsURL)
        .map(this.extractData);
    }

    getContribution(id: number): Observable<Contribution> {
        return this.http.get(this.contributionsURL)
        .map(this.extractData);
    }

    save(dpRequest: Contribution): Observable<Contribution> {
        return this.http.get(this.contributionsURL)
        .map(this.extractData);
    }

    private extractData(res: Response) {
        return res.json() || { };
    }
}
