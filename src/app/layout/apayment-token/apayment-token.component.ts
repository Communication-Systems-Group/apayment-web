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
    transactions = [];

    constructor(private userService: UserService, private notify: NotificationService, private apaymentTokenService: APaymentTokenService) {
    }

    ngOnInit() {
        this.getAllUsers();
        this.getAllTransactions();
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

    getAllTransactions() {
        this.apaymentTokenService.getTransactions().subscribe(
            transactions => {
                this.transactions = transactions;
            },
            error => {
                this.notify.show(error.statusText + ': ' + error._body, {type: 'error'});
            }
        );
    }

    execTransfer() {
        this.apaymentTokenService.transfer(this.model).subscribe(
            result => {
                this.model = {to: '', amount: 0};
                this.notify.show('Transfer submitted. Once the transaction has been executed it will show up.', {type: 'success'});
            },
            error => {
                this.notify.show(error.statusText + ': ' + error._body, {type: 'error'});
            }
        );
    }
}
