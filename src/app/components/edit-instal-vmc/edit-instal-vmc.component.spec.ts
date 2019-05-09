import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditInstalVmcComponent } from './edit-instal-vmc.component';

describe('EditInstalVmcComponent', () => {
  let component: EditInstalVmcComponent;
  let fixture: ComponentFixture<EditInstalVmcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditInstalVmcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditInstalVmcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
