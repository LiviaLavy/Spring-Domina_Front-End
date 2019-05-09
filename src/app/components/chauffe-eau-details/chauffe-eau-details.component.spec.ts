import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChauffeEauDetailsComponent } from './chauffe-eau-details.component';

describe('ChauffeEauDetailsComponent', () => {
  let component: ChauffeEauDetailsComponent;
  let fixture: ComponentFixture<ChauffeEauDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChauffeEauDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChauffeEauDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
