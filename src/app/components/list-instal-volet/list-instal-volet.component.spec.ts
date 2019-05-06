import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListInstalVoletComponent } from './list-instal-volet.component';

describe('ListInstalVoletComponent', () => {
  let component: ListInstalVoletComponent;
  let fixture: ComponentFixture<ListInstalVoletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListInstalVoletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListInstalVoletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
