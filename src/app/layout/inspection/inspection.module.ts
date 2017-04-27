import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InspectionComponent} from './inspection.component';
import {InspectionRoutingModule} from './inspection-routing.module';
import {PageHeaderModule} from '../../shared/modules/page-header/page-header.module';

@NgModule({
    imports: [
        CommonModule,
        InspectionRoutingModule,
        PageHeaderModule,
    ],
    declarations: [InspectionComponent]
})
export class InspectionModule {
}
