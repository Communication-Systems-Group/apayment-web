import {Component, OnInit} from '@angular/core';

@Component({
               selector: 'app-dashboard',
               templateUrl: './dashboard.component.html',
               styleUrls: ['./dashboard.component.scss']
           })
export class DashboardComponent implements OnInit {
    public alerts: Array<any> = [];
    public sliders: Array<any> = [];

    constructor() {
        this.sliders.push({
                              imagePath: 'assets/images/newslider1.jpeg',
                              label: 'Direktzahlungen',
                              text: 'Easy to request Direktzahlungen.'
                          }, {
                              imagePath: 'assets/images/newslider2.jpeg',
                              label: 'Inspection',
                              text: 'Automated generated checklists for inspections'
                          }, {
                              imagePath: 'assets/images/newslider3.jpg',
                              label: 'Payment',
                              text: 'Receive payments through DP-tokens'
                          });

        this.alerts.push({
                             id: 1,
                             type: 'success',
                             message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptates est animi quibusdam praesentium quam, et perspiciatis,
                consectetur velit culpa molestias dignissimos
                voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`,
                         }, {
                             id: 2,
                             type: 'warning',
                             message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptates est animi quibusdam praesentium quam, et perspiciatis,
                consectetur velit culpa molestias dignissimos
                voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`,
                         });
    }

    ngOnInit() {
    }

    public closeAlert(alert: any) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }
}
