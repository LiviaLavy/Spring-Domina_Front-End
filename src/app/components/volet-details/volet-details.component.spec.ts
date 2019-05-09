import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoletDetailsComponent } from './volet-details.component';

describe('VoletDetailsComponent', () => {
  let component: VoletDetailsComponent;
  let fixture: ComponentFixture<VoletDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoletDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoletDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
