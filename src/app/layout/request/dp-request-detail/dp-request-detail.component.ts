import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {DPRequest} from '../../../shared/models/dp-request.model';
import {DPRequestService} from '../../../shared/services/dp-request.service';
import {Contribution} from '../../../shared/models/contribution.model';
import {ContributionService} from '../../../shared/services/contribution.service';

@Component({
    selector: 'app-dprequest-detail',
    templateUrl: './dp-request-detail.component.html',
    styleUrls: ['./dp-request-detail.component.scss']
})

export class DPRequestDetailComponent implements OnInit {
    @Input() dpRequest: DPRequest;
    @Output() close = new EventEmitter();
    error: any;
    navigated = false; // true if navigated here


    contributions: Contribution[];

    constructor(private route: ActivatedRoute,
                private dpRequestService: DPRequestService,
                private contributionService: ContributionService) {
    }

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            if (params['id'] !== undefined) {
                const id = +params['id'];
                this.navigated = true;

                // this.dpRequestService.getDPRequest(id).subscribe(
                //     dpRequest => this.dpRequest = dpRequest
                // );
            } else {
                this.navigated = false;
                this.dpRequest = new DPRequest();
                this.dpRequest.name = '';
                this.dpRequest.contributions = [];
            }
        });
        this.getContributions();
    }


    onContributionSelectionChange(contributionId: number, action: string = 'add') {
        if (action === 'add') {
            this.contributionService.getContribution(contributionId).subscribe(
                contribution => {
                    // TODO: make sure inspectionCriteria does not include contribution
                    contribution.inspectionCriteria = [];
                    this.dpRequest.contributions.push(contribution);
                },
                error => {
                    console.error(error);
                }
            );
        } else {
            const index = this.dpRequest.contributions.findIndex(contribution => contribution.id === contributionId);
            this.dpRequest.contributions.splice(index, 1);
        }
    }


    getContributions() {
        this.contributionService.getContributions().subscribe(
            _contributions => {
                this.contributions = _contributions;
            }
        );
    }

    save(): void {
        this.dpRequestService
        .create(this.dpRequest)
        .subscribe(
            dpRequest => {
                this.dpRequest = dpRequest; //
                this.goBack(dpRequest);
            },
            error => this.error = error // TODO: Display error message
        );
    }

    goBack(savedDPRequest: DPRequest = null): void {
        this.close.emit(savedDPRequest);
        if (this.navigated) {
            window.history.back();
        }
    }

}
