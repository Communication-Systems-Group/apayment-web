import {Component, OnInit} from '@angular/core';
import {DPRequest} from '../../shared/models/dp-request.model';

const DPREQUESTS: DPRequest[] = [
    { id: 11, name: 'Mr. Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
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


