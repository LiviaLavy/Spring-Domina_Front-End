import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEclairagesSummaryComponent } from './list-eclairages-summary.component';

describe('ListEclairagesSummaryComponent', () => {
  let component: ListEclairagesSummaryComponent;
  let fixture: ComponentFixture<ListEclairagesSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListEclairagesSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEclairagesSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
