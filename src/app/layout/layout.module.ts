import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';

import {LayoutRoutingModule} from './layout-routing.module';
import {LayoutComponent} from './layout.component';
import {HeaderComponent, SidebarComponent} from '../shared';
import {AdminGuard} from '../guards/admin.guards';
import {FarmerGuard} from '../guards/farmer.guards';
import {InspectorGuard} from '../guards/inspector.guards';
import {CantonGuard} from '../guards/canton.guards';
import {SharedPipesModule} from '../shared/pipes/shared-pipes.module';


@NgModule({
    imports: [
        CommonModule,
        NgbDropdownModule.forRoot(),
        LayoutRoutingModule,
        SharedPipesModule
    ],
    declarations: [
        HeaderComponent,
        SidebarComponent,
        LayoutComponent
    ],
    providers: [AdminGuard, FarmerGuard, InspectorGuard, CantonGuard]
})
export class LayoutModule {
}
