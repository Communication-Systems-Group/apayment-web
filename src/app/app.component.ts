import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NotificationService} from 'ng2-notify-popup';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [NotificationService]
})
export class AppComponent implements OnInit {
    constructor(public router: Router) { }
    ngOnInit() {
        // this.router.navigate(['/login']);
    }
}
