import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SignupRoutingModule} from './signup-routing.module';
import {SignupComponent} from './signup.component';
import {UserService} from '../shared/services/user.service';
import {FormsModule} from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        SignupRoutingModule,
        FormsModule
    ],
    declarations: [SignupComponent],
    providers: [UserService]
})
export class SignupModule {
}
