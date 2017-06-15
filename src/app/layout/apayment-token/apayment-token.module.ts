import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PageHeaderModule} from '../../shared/modules/page-header/page-header.module';
import {APaymentTokenComponent} from './apayment-token.component';
import {APaymentTokenRoutingModule} from './apayment-token-routing.module';
import {FormsModule} from '@angular/forms';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        APaymentTokenRoutingModule,
        PageHeaderModule
    ],
    declarations: [APaymentTokenComponent]
})
export class APaymentTokenModule {
}

