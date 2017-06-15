import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {APaymentTokenComponent} from './apayment-token.component';


const routes: Routes = [
    {path: '', component: APaymentTokenComponent},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class APaymentTokenRoutingModule {
}
