import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {DPRequest} from '../../../shared/models/dp-request.model';
import {DPRequestService} from '../../../shared/services/dp-request.service';
import {User} from '../../../shared/models/user.model';
import {UserService} from '../../../shared/services/user.service';
import {AuthenticationService} from '../../../shared/services/authentication.service';

@Component({
    selector: 'app-dprequest-detail',
    templateUrl: './dp-request-detail.component.html',
    styleUrls: ['./dp-request-detail.component.scss'],
    providers: [UserService]
})

export class DPRequestDetailComponent implements OnInit {
    dpRequest: DPRequest;
    error: any;
    navigated = false; // true if navigated here
    header: any[];
    inspectors: User[];

    constructor(private route: ActivatedRoute,
                private dpRequestService: DPRequestService,
                private userService: UserService,
                private authService: AuthenticationService) {
        this.header = [
            {
                link: '/requests',
                title: 'Requests'
            }];
    }

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            if (params['id'] !== undefined) {
                const id = +params['id'];
                this.navigated = true;
                this.dpRequestService.getById(id).subscribe(
                    dpRequest => {
                        this.dpRequest = dpRequest;
                        this.header.push({
                            link: '/requests/' + this.dpRequest.id,
                            title: 'Request (' + this.dpRequest.id + ')'
                        });
                    },
                    error => this.error = error
                );
            }
        });
        this.getInspectors();
    }

    getInspectors() {
        this.userService.getUserByRole('Inspector').subscribe(
            inspectors => {
                this.inspectors = inspectors;
            },
            error => this.error = error
        );
    }

    save(): void {
        this.dpRequestService.addInspector(this.dpRequest).subscribe(
            dpRequest => {
                console.log('success');
            },
            error => this.error = error // TODO: Display error message
        );
        // this.dpRequestService
        // .create(this.dpRequest)
        // .subscribe(
        //     dpRequest => {
        //         this.dpRequest = dpRequest; //
        //         this.goBack(dpRequest);
        //     },
        //     error => this.error = error // TODO: Display error message
        // );
    }

    goBack(savedDPRequest: DPRequest = null): void {
        if (this.navigated
        ) {
            window.history.back();
        }
    }

    toggleCollapse(event): void {
        const element = (event.target as Element);
        const elementToCollapse: Element = element.parentElement.parentElement.nextElementSibling;
        const classes = elementToCollapse.getAttribute('class');
        if (classes.includes('show')) {
            element.innerHTML = 'Show more';
            elementToCollapse.setAttribute('class', 'row collapse');
        } else {
            element.innerHTML = 'Show less';
            elementToCollapse.setAttribute('class', 'row collapse show');
        }
    }
}
