import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DpRequestDetailComponent } from './dp-request-detail.component';

describe('DpRequestDetailComponent', () => {
  let component: DpRequestDetailComponent;
  let fixture: ComponentFixture<DpRequestDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DpRequestDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DpRequestDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
