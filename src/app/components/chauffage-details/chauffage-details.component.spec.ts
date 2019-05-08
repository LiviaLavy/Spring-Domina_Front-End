import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChauffageDetailsComponent } from './chauffage-details.component';

describe('ChauffageDetailsComponent', () => {
  let component: ChauffageDetailsComponent;
  let fixture: ComponentFixture<ChauffageDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChauffageDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChauffageDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
