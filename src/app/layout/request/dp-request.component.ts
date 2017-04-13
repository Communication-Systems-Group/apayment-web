import {Component, OnInit} from '@angular/core';
import {DPRequest} from '../../shared/models/dp-request.model';

const DPREQUESTS: DPRequest[] = [
    { id: 11, name: 'Mr. Nice', contributions: [] },
    { id: 12, name: 'Narco', contributions: [] },
    { id: 13, name: 'Bombasto', contributions: [] },
    { id: 14, name: 'Celeritas', contributions: [] },
    { id: 15, name: 'Magneta', contributions: [] },
    { id: 16, name: 'RubberMan', contributions: [] },
    { id: 17, name: 'Dynama', contributions: [] },
    { id: 18, name: 'Dr IQ', contributions: [] },
    { id: 19, name: 'Magma', contributions: [] },
    { id: 20, name: 'Tornado', contributions: [] }
];

@Component({
    selector: 'app-dprequests',
    templateUrl: './dp-request.component.html',
    styleUrls: ['./dp-request.component.scss']
})


export class DPRequestComponent implements OnInit {
    dpRequests = DPREQUESTS;
    selectedDPRequest: DPRequest;
    addingDpRequest = false;

    constructor() { }
    ngOnInit() {
        console.log('hello');
    }
    onSelect(dpRequest: DPRequest): void {
        console.log(dpRequest)
        this.selectedDPRequest = dpRequest;
    }

    addRequest(): void {
        this.addingDpRequest = true;
        this.selectedDPRequest = null;
    }

    close(savedDpRequest: DPRequest): void {
        this.addingDpRequest = false;
        if (savedDpRequest) {
            // this.getHeroes();
        }
    }
}


