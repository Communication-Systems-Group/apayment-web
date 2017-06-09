import {DPRequestService} from '../../../shared/services/dp-request.service';
import {DPRequest} from '../../../shared/models/dp-request.model';
import {Inspection} from '../../../shared/models/inspection.model';
import {Lack} from '../../../shared/models/lack.models';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
    selector: 'app-inspection-detail',
    templateUrl: './inspection-detail.component.html',
    styleUrls: ['./inspection-detail.component.scss'],
})
export class InspectionDetailComponent implements OnInit {
    header: any[];
    dpRequest: DPRequest;
    error: any;

    inspection: Inspection;

    constructor(private route: ActivatedRoute, private router: Router, private dpRequestService: DPRequestService) {
        this.header = [
            {
                link: '/inspections',
                title: 'Inspections'
            }];
        this.inspection = new Inspection();
        this.inspection.lacks = [];
    }

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            if (params['id'] !== undefined) {
                const id = +params['id'];
                this.header.push({
                    link: '/inspections/' + id,
                    title: 'Inspection for Request (' + id + ')'
                });
                this.dpRequestService.getById(id).subscribe(
                    dpRequest => {
                        this.dpRequest = dpRequest;
                        this.inspection.requestId = id;
                    },
                    error => this.error = error
                );
            }
        });
    }


    onLackSelected(contributionCode: number, controlCategoryId: string, pointGroupCode: number, controlPointId: string, lack: Lack) {

        const index = this.inspection.lacks.map(function (e) {
            return e.contributionCode + e.controlCategoryId + e.pointGroupCode + e.controlPointId;
        }).indexOf(contributionCode + controlCategoryId + pointGroupCode + controlPointId);

        // Lack already exists
        if (index > -1) {
            if (lack) {
                this.inspection.lacks[index] = {
                    contributionCode: contributionCode,
                    controlCategoryId: controlCategoryId,
                    pointGroupCode: pointGroupCode,
                    controlPointId: controlPointId,
                    lackId: lack.id,
                    points: lack.points
                };
            } else {
                this.inspection.lacks.splice(index, 1);
            }
        } else {
            this.inspection.lacks.push({
                contributionCode: contributionCode,
                controlCategoryId: controlCategoryId,
                pointGroupCode: pointGroupCode,
                controlPointId: controlPointId,
                lackId: lack.id,
                points: lack.points
            });
        }
    }

    submitInspection() {
        this.dpRequestService.submitInspection(this.inspection).subscribe(
            result => {
                console.log(result);
                this.router.navigate(['inspections']);
            },
            error => this.error = error
        );
    }
}
