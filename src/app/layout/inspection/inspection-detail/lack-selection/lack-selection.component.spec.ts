import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LackSelectionComponent} from './lack-selection.component';

describe('LackSelectionComponent', () => {
    let component: LackSelectionComponent;
    let fixture: ComponentFixture<LackSelectionComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [LackSelectionComponent]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LackSelectionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
