import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PageHeaderModule} from './../../shared';
import {ContributionRoutingModule} from './dp-request-routing.module';
import {DPRequestComponent} from './dp-request.component';
import {DPRequestDetailComponent} from './dp-request-detail/dp-request-detail.component';
import {DPRequestService} from '../../shared/services/dp-request.service';
import {FormsModule} from '@angular/forms';


@NgModule({
    imports: [
        CommonModule,
        ContributionRoutingModule,
        PageHeaderModule,
        FormsModule
    ],
    providers: [DPRequestService],
    declarations: [DPRequestComponent, DPRequestDetailComponent]
})
export class DPRequestModul { }
