import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {APaymentTokenComponent} from './apayment-token.component';

describe('APaymentTokenComponent', () => {
    let component: APaymentTokenComponent;
    let fixture: ComponentFixture<APaymentTokenComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [APaymentTokenComponent]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(APaymentTokenComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    // it('should be created', () => {
    //     expect(component).toBeTruthy();
    // });
});
