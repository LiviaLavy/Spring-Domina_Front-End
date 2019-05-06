import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListInstalChauffageComponent } from './list-instal-chauffage.component';

describe('ListInstalChauffageComponent', () => {
  let component: ListInstalChauffageComponent;
  let fixture: ComponentFixture<ListInstalChauffageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListInstalChauffageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListInstalChauffageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
