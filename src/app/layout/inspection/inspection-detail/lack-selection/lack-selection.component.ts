import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Lack} from '../../../../shared/models/lack.models';

@Component({
    selector: 'app-lack-selection',
    templateUrl: './lack-selection.component.html',
    styleUrls: ['./lack-selection.component.scss']
})
export class LackSelectionComponent implements OnInit {
    @Input() lacks: Lack[];
    @Output() onLackSelected = new EventEmitter<Lack>();
    selectedLack: Lack;

    constructor() {
    }

    ngOnInit() {
    }

    onChange(lack: Lack) {
        this.onLackSelected.emit(lack);
    }
}
