import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListInstalEclairageComponent } from './list-instal-eclairage.component';

describe('ListInstalEclairageComponent', () => {
  let component: ListInstalEclairageComponent;
  let fixture: ComponentFixture<ListInstalEclairageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListInstalEclairageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListInstalEclairageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
