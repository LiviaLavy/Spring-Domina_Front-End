import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditInstalVoletComponent } from './edit-instal-volet.component';

describe('EditInstalVoletComponent', () => {
  let component: EditInstalVoletComponent;
  let fixture: ComponentFixture<EditInstalVoletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditInstalVoletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditInstalVoletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
