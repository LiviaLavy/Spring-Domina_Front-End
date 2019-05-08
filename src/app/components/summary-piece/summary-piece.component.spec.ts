import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryPieceComponent } from './summary-piece.component';

describe('SummaryPieceComponent', () => {
  let component: SummaryPieceComponent;
  let fixture: ComponentFixture<SummaryPieceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummaryPieceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryPieceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
