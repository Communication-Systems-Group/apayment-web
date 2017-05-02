import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {InspectionComponent} from './inspection.component';
import {InspectionDetailComponent} from './inspection-detail/inspection-detail.component';

const routes: Routes = [
    {path: '', component: InspectionComponent},
    {path: ':id', component: InspectionDetailComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class InspectionRoutingModule {
}
