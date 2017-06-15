import {Component, OnInit} from '@angular/core';
import {UserService} from '../../shared/services/user.service';
import {NotificationService} from 'ng2-notify-popup';

@Component({
    selector: 'app-apayment-token',
    templateUrl: './apayment-token.component.html',
    styleUrls: ['./apayment-token.component.scss'],
    providers: [UserService]
})
export class APaymentTokenComponent implements OnInit {

    model = {receiver: '', amount: 0};
    users = [];

    submitted = false;

    constructor(private userService: UserService, private notify: NotificationService) {
    }

    ngOnInit() {
        this.getAllUsers();
    }

    getAllUsers() {
        this.userService.getAllUsers().subscribe(
            users => {
                this.users = users;
            },
            error => {
                this.notify.show(error.statusText + ': ' + error._body, {type: 'error'});
            }
        );
    }

    execTransfer() {
        console.log('sent');
        this.submitted = true;
    }
}
