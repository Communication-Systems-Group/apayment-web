import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AuthGuard} from './guards/auth.guards';
import {GlobalErrorHandler} from './shared/services/global-error-handler';


@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule
    ],
    providers: [AuthGuard, {
        provide: ErrorHandler,
        useClass: GlobalErrorHandler
    }],
    bootstrap: [AppComponent]
})
export class AppModule { }
