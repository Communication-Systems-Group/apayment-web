import {Component, OnInit} from '@angular/core';
import {Contribution} from '../../shared/models/contribution.model';

const CONTRIBUTIONS: Contribution[] = [
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
    selector: 'app-contribution',
    templateUrl: './contribution.component.html',
    styleUrls: ['./contribution.component.scss']
})


export class ContributionComponent implements OnInit {
    contributions = CONTRIBUTIONS;
    selectedContribution: Contribution;

    constructor() { }
    ngOnInit() {
        console.log('hello');
    }
    onSelect(contribution: Contribution): void {
        this.selectedContribution = contribution;
    }
}


