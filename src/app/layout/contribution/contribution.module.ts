import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PageHeaderModule} from './../../shared';
import {ContributionRoutingModule} from './contribution-routing.module';
import {ContributionComponent} from './contribution.component';
import {ContributionService} from '../../shared/services/contribution.service';

@NgModule({
    imports: [
        CommonModule,
        ContributionRoutingModule,
        PageHeaderModule
    ],
    providers: [ContributionService],
    declarations: [ContributionComponent]
})
export class ContributionModule { }
