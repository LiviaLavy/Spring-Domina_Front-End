import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditInstalChauffageComponent } from './edit-instal-chauffage.component';

describe('EditInstalChauffageComponent', () => {
  let component: EditInstalChauffageComponent;
  let fixture: ComponentFixture<EditInstalChauffageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditInstalChauffageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditInstalChauffageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
