import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NotificationsService} from 'angular2-notifications/dist';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
               providers: [NotificationsService]
})
export class AppComponent implements OnInit {
    public options = {
        position: ['bottom', 'right'],
        timeOut: 10000,
        lastOnBottom: true,
        clickToClose: true,
    };

    constructor(public router: Router) {
    }

    ngOnInit() {
        // this.router.navigate(['/login']);
    }
}
