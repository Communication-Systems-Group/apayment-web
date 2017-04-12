import {Component, OnInit} from '@angular/core';
import {Contribution} from '../../shared/models/contribution.model';
import {ContributionService} from '../../shared/services/contribution.service';


@Component({
    selector: 'app-contribution',
    templateUrl: './contribution.component.html',
    styleUrls: ['./contribution.component.scss']
})


export class ContributionComponent implements OnInit {
    contributions: Contribution[];
    selectedContribution: Contribution;

    constructor(private contributionService: ContributionService) {
    }

    ngOnInit() {
        this.getContributions();
    }

    getContributions() {
        this.contributionService.getContributions().subscribe(
            data => {
                console.log(data);
                this.contributions = data;
            },
            error => {
                // ToDo: Handle error
                console.log('Error while contribution call' + error);
            }
        );
    }

    onSelect(contribution: Contribution): void {
        this.selectedContribution = contribution;
    }
}


