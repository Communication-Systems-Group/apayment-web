import {Component, OnInit} from '@angular/core';
import {UserService} from '../../shared/services/user.service';
import {APaymentTokenService} from '../../shared/services/apayment-token.service';
import {NotificationsService} from 'angular2-notifications/dist';

@Component({
               selector: 'app-apayment-token',
               templateUrl: './apayment-token.component.html',
               styleUrls: ['./apayment-token.component.scss'],
               providers: [UserService, APaymentTokenService]
           })
export class APaymentTokenComponent implements OnInit {

    model = {to: '', amount: 0, message: ''};
    users = [];
    transactions = [];

    constructor(private userService: UserService,
                private apaymentTokenService: APaymentTokenService,
                private notify: NotificationsService) {
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
                this.notify.error('Service Error', error.statusText + ': ' + error._body, {});
            }
        );
    }

    getAllTransactions() {
        this.apaymentTokenService.getTransactions().subscribe(
            transactions => {
                this.transactions = transactions;
            },
            error => {
                this.notify.error('Service Error', error.statusText + ': ' + error._body, {});
            }
        );
    }

    execTransfer() {
        this.apaymentTokenService.transfer(this.model).subscribe(
            result => {
                this.model = {to: '', amount: 0, message: ''};
                this.notify.success('Transfer submitted',
                                    'Once the transcation has been executed it will show up.', {});
            },
            error => {
                this.notify.error('Service Error', error.statusText + ': ' + error._body, {});
            }
        );
    }
}
