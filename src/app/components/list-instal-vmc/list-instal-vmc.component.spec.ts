import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListInstalVMCComponent } from './list-instal-vmc.component';

describe('ListInstalVMCComponent', () => {
  let component: ListInstalVMCComponent;
  let fixture: ComponentFixture<ListInstalVMCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListInstalVMCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListInstalVMCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
