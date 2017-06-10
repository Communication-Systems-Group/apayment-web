import {ErrorHandler, Injectable, Injector} from '@angular/core';
import {LocationStrategy, PathLocationStrategy} from '@angular/common';
import {Response} from '@angular/http';
@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

    constructor(private injector: Injector) {
    }

    handleError(error: Response | any) {
        console.log('global error Handler');

        // In a real world app, you might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }


        const location = this.injector.get(LocationStrategy);

        const url = location instanceof PathLocationStrategy ? location.path() : '';
        console.error(errMsg, 'URL:', url);
        // IMPORTANT: Rethrow the error otherwise it gets swallowed
        throw error;
    }

}
