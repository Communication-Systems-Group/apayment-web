import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DpRequestNewComponent} from './dp-request-new.component';

describe('DpRequestNewComponent', () => {
  let component: DpRequestNewComponent;
  let fixture: ComponentFixture<DpRequestNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DpRequestNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DpRequestNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
