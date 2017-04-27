import {Component, OnInit} from '@angular/core';
import {DPRequest} from '../../shared/models/dp-request.model';
import {DPRequestService} from '../../shared/services/dp-request.service';
import {Router} from '@angular/router';


@Component({
    selector: 'app-dprequests',
    templateUrl: './dp-request.component.html',
    styleUrls: ['./dp-request.component.scss']
})


export class DPRequestComponent implements OnInit {
    dpRequests;
    selectedDPRequest: DPRequest;
    addingDpRequest = false;
    error: any;

    constructor(private router: Router, private dpRequestService: DPRequestService) {
    }

    ngOnInit() {
        this.dpRequests = [];
        this.getRequests();
    }

    getRequests() {
        this.dpRequestService.getAll().subscribe(
            (res) => {
                this.dpRequests = res;
            },
        error => this.error = error
        );
    }

    onSelect(dpRequest: DPRequest): void {
        this.selectedDPRequest = dpRequest;
        // this.router.navigate(["requests", "details", dpRequest.id]);
    }

    addRequest(): void {
        this.addingDpRequest = true;
        this.selectedDPRequest = null;
    }

    close(savedDpRequest: DPRequest): void {
        this.addingDpRequest = false;
        this.getRequests();
    }
}


