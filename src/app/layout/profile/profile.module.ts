import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PageHeaderModule} from '../../shared/modules/page-header/page-header.module';
import {ProfileComponent} from './profile.component';
import {ProfileRoutingModule} from './profile-routing.module';

@NgModule({
    imports: [
        CommonModule,
        ProfileRoutingModule,
        PageHeaderModule
    ],
    declarations: [ProfileComponent]
})
export class ProfileModule {
}

