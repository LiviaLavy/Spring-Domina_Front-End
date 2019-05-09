import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListVmcSummaryComponent } from './list-vmc-summary.component';

describe('ListVmcSummaryComponent', () => {
  let component: ListVmcSummaryComponent;
  let fixture: ComponentFixture<ListVmcSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListVmcSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListVmcSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
