import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DPRequest} from '../../../shared/models/dp-request.model';
import {Contribution} from '../../../shared/models/contribution.model';
import {ActivatedRoute, Params} from '@angular/router';
import {DPRequestService} from '../../../shared/services/dp-request.service';
import {ContributionService} from '../../../shared/services/contribution.service';
import {NotificationsService} from 'angular2-notifications/dist';


@Component({
               selector: 'app-dp-request-new',
               templateUrl: './dp-request-new.component.html',
               styleUrls: ['./dp-request-new.component.scss']
           })
export class DpRequestNewComponent implements OnInit {
    @Input() dpRequest: DPRequest;
    @Output() close = new EventEmitter();
    error: any;
    navigated = false; // true if navigated here


    contributions: Contribution[];

    constructor(private route: ActivatedRoute,
                private dpRequestService: DPRequestService,
                private contributionService: ContributionService,
                private notify: NotificationsService) {
    }

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            if (params['id'] !== undefined) {
                const id = +params['id'];
                this.navigated = true;
                this.dpRequestService.getById(id).subscribe(
                    dpRequest => this.dpRequest = dpRequest,
                    error => this.error = error
                );
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
                    this.dpRequest.contributions.push(contribution);
                },
                error => {
                    this.notify.error('Service Error', error.statusText + ': ' + error._body, {});
                    console.error(error);
                }
            );
        } else {
            const index = this.dpRequest.contributions.findIndex(
                contribution => contribution.id === contributionId);
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
                error => {
                    this.notify.error('Service Error', error.statusText + ': ' + error._body, {});
                    this.error = error;
                } // TODO: Display error message
            );
        // this.close.emit(savedDPRequest);
    }

    goBack(savedDPRequest: DPRequest = null): void {
        this.close.emit(savedDPRequest);
        if (this.navigated) {
            window.history.back();
        }
    }

}
