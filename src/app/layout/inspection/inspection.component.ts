import {Component, OnInit} from '@angular/core';
import {DPRequest} from '../../shared/models/dp-request.model';
import {DPRequestService} from '../../shared/services/dp-request.service';

@Component({
    selector: 'app-inspection',
    templateUrl: './inspection.component.html',
    styleUrls: ['./inspection.component.scss']
})
export class InspectionComponent implements OnInit {
    dpRequests: DPRequest[];

    constructor(private dpRequestService: DPRequestService) {
    }

    ngOnInit() {
        this.getAllRequestForInspection();
    }

    getAllRequestForInspection() {
        this.dpRequestService.getAllForInspection().subscribe(
            dpRequests => {
                this.dpRequests = dpRequests;
            }
        );
    }
}
