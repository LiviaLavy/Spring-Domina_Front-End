import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditInstalEclairageComponent } from './edit-instal-eclairage.component';

describe('EditInstalEclairageComponent', () => {
  let component: EditInstalEclairageComponent;
  let fixture: ComponentFixture<EditInstalEclairageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditInstalEclairageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditInstalEclairageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
