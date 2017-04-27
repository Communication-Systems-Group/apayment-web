import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {DPRequestComponent} from './dp-request.component';
import {DPRequestDetailComponent} from './dp-request-detail/dp-request-detail.component';

const routes: Routes = [
    { path: '', component: DPRequestComponent },
    { path: ':id', component: DPRequestDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DPRequestRoutingModule {
}
