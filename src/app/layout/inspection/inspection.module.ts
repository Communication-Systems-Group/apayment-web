import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InspectionComponent} from './inspection.component';
import {InspectionRoutingModule} from './inspection-routing.module';
import {PageHeaderModule} from '../../shared/modules/page-header/page-header.module';
import {InspectionDetailComponent} from './inspection-detail/inspection-detail.component';
import {DPRequestService} from '../../shared/services/dp-request.service';
import {LackSelectionComponent} from './inspection-detail/lack-selection/lack-selection.component';
import {FormsModule} from '@angular/forms';
import {AccordionModule} from 'ngx-bootstrap/accordion';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        InspectionRoutingModule,
        PageHeaderModule,
        AccordionModule.forRoot()
    ],
    declarations: [InspectionComponent, InspectionDetailComponent, LackSelectionComponent],
    providers: [DPRequestService]
})
export class InspectionModule {
}
