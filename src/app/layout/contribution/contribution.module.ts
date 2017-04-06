import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PageHeaderModule} from './../../shared';
import {ContributionRoutingModule} from './contribution-routing.module';
import {ContributionComponent} from './contribution.component';

@NgModule({
    imports: [
        CommonModule,
        ContributionRoutingModule,
        PageHeaderModule
    ],
    declarations: [ContributionComponent]
})
export class ContributionModule { }
