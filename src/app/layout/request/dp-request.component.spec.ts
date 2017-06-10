import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DPRequestComponent} from './dp-request.component';

describe('DPRequestComponent', () => {
  let component: DPRequestComponent;
  let fixture: ComponentFixture<DPRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DPRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DPRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

    // it('should create', () => {
    //   expect(component).toBeTruthy();
    // });
});
