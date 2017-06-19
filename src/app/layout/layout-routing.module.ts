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
            },
            {path: 'profile', loadChildren: './profile/profile.module#ProfileModule'},
            {path: 'charts', loadChildren: './charts/charts.module#ChartsModule'},
            {path: 'tables', loadChildren: './tables/tables.module#TablesModule'},
            {path: 'forms', loadChildren: './form/form.module#FormModule'},
            {path: 'bs-element', loadChildren: './bs-element/bs-element.module#BsElementModule'},
            {path: 'grid', loadChildren: './grid/grid.module#GridModule'},
            {
                path: 'components',
                loadChildren: './bs-component/bs-component.module#BsComponentModule'
            },
            {path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule'},
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {
}
