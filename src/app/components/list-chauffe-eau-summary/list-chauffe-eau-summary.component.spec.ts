import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListChauffeEauSummaryComponent } from './list-chauffe-eau-summary.component';

describe('ListChauffeEauSummaryComponent', () => {
  let component: ListChauffeEauSummaryComponent;
  let fixture: ComponentFixture<ListChauffeEauSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListChauffeEauSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListChauffeEauSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
