import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListVoletsSummaryComponent } from './list-volets-summary.component';

describe('ListVoletsSummaryComponent', () => {
  let component: ListVoletsSummaryComponent;
  let fixture: ComponentFixture<ListVoletsSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListVoletsSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListVoletsSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
