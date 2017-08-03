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
        for (let i = 0; i < this.lacks.length; i++) {
            if (this.lacks[i].computed === true) {
                this.selectedLack = this.lacks[i];
                this.onChange(this.selectedLack)
            }
        }
    }

    onChange(lack: Lack) {
        this.onLackSelected.emit(lack);
    }
}
