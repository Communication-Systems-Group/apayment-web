import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PageHeaderModule} from '../../shared/modules/page-header/page-header.module';
import {APaymentTokenComponent} from './apayment-token.component';
import {APaymentTokenRoutingModule} from './apayment-token-routing.module';
import {FormsModule} from '@angular/forms';
import {SharedPipesModule} from '../../shared/pipes/shared-pipes.module';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        APaymentTokenRoutingModule,
        PageHeaderModule,
        SharedPipesModule
    ],
    declarations: [APaymentTokenComponent]
})
export class APaymentTokenModule {
}

