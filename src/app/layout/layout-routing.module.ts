import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from './layout.component';
import {AdminGuard} from '../guards/admin.guards';
import {InspectorGuard} from '../guards/inspector.guards';

const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            {path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule'},
            {
                path: 'requests',
                loadChildren: './request/dp-request.module#DPRequestModul',
                canActivate: []
            },
            {
                path: 'inspections',
                loadChildren: './inspection/inspection.module#InspectionModule',
                canActivate: [InspectorGuard]
            },
            {
                path: 'contributions',
                loadChildren: './contribution/contribution.module#ContributionModule',
                canActivate: [AdminGuard]
            },
            {
                path: 'token',
                loadChildren: './apayment-token/apayment-token.module#APaymentTokenModule',
                // canActivate: [AdminGuard]
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {
}
