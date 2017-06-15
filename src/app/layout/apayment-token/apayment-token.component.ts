import {Component, OnInit} from '@angular/core';
import {UserService} from '../../shared/services/user.service';
import {NotificationService} from 'ng2-notify-popup';
import {APaymentTokenService} from '../../shared/services/apayment-token.service';

@Component({
    selector: 'app-apayment-token',
    templateUrl: './apayment-token.component.html',
    styleUrls: ['./apayment-token.component.scss'],
    providers: [UserService, APaymentTokenService]
})
export class APaymentTokenComponent implements OnInit {

    model = {to: '', amount: 0};
    users = [];

    submitted = false;

    constructor(private userService: UserService, private notify: NotificationService, private apaymentTokenService: APaymentTokenService) {
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
        this.apaymentTokenService.transfer(this.model).subscribe(
            result => {
                this.notify.show(JSON.stringify(result), {type: 'success'});
            },
            error => {
                this.notify.show(error.statusText + ': ' + error._body, {type: 'error'});
            }
        );
    }
}
