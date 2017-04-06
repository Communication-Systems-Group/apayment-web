import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {DPRequest} from '../../../shared/models/dp-request.model';
import {DPRequestService} from '../../../shared/services/dp-request.service';

@Component({
  selector: 'app-dprequest-detail',
  templateUrl: './dp-request-detail.component.html',
  styleUrls: ['./dp-request-detail.component.scss']
})

export class DPRequestDetailComponent implements OnInit {
    @Input() dpRequest: DPRequest;
    @Output() close = new EventEmitter();
    error: any;
    navigated = false; // true if navigated here

  constructor(private route: ActivatedRoute, private dpRequestService: DPRequestService) { }

  ngOnInit() {
      this.route.params.forEach((params: Params) => {
          if (params['id'] !== undefined) {
              const id = +params['id'];
              this.navigated = true;

              this.dpRequestService.getDPRequest(id).subscribe(
                  dpRequest => this.dpRequest = dpRequest
              );
          } else {
              this.navigated = false;
              this.dpRequest = new DPRequest();
              this.dpRequest.name = '';
          }
      });
  }

    save(): void {
        this.dpRequestService
        .save(this.dpRequest)
        .subscribe(dpRequest => {
            this.dpRequest = dpRequest; // saved hero, w/ id if new
            this.goBack(dpRequest);
        },
            error => this.error = error // TODO: Display error message
        );
    }

    goBack(savedDPRequest: DPRequest = null): void {
        this.close.emit(savedDPRequest);
        if (this.navigated) { window.history.back(); }
    }

}
