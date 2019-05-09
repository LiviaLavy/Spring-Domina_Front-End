import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EclairageDetailsComponent } from './eclairage-details.component';

describe('EclairageDetailsComponent', () => {
  let component: EclairageDetailsComponent;
  let fixture: ComponentFixture<EclairageDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EclairageDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EclairageDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
