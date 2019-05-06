import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListChauffagesSummaryComponent } from './list-chauffages-summary.component';

describe('ListChauffagesSummaryComponent', () => {
  let component: ListChauffagesSummaryComponent;
  let fixture: ComponentFixture<ListChauffagesSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListChauffagesSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListChauffagesSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
