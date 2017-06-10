import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {DPRequestDetailComponent} from './dp-request-detail.component';


describe('DpRequestDetailComponent', () => {
    let component: DPRequestDetailComponent;
    let fixture: ComponentFixture<DPRequestDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [DPRequestDetailComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
      fixture = TestBed.createComponent(DPRequestDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

    // it('should create', () => {
    //   expect(component).toBeTruthy();
    // });
});
