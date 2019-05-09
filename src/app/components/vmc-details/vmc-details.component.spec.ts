import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VmcDetailsComponent } from './vmc-details.component';

describe('VmcDetailsComponent', () => {
  let component: VmcDetailsComponent;
  let fixture: ComponentFixture<VmcDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VmcDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VmcDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
