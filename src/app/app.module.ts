import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AuthGuard} from './guards/auth.guards';
import {AuthenticationService} from './shared/services/authentication.service';
import {AuthModule} from './shared/modules/auth/auth.module';
import {NgNotifyPopup} from 'ng2-notify-popup';
import {GlobalErrorHandler} from './shared/services/global-error-handler';


@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        AuthModule,
        NgNotifyPopup
    ],
    providers: [
        {provide: ErrorHandler, useClass: GlobalErrorHandler},
        AuthenticationService,
        AuthGuard
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
