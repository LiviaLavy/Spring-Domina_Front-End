import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditInstalChauffeEauComponent } from './edit-instal-chauffe-eau.component';

describe('EditInstalChauffeEauComponent', () => {
  let component: EditInstalChauffeEauComponent;
  let fixture: ComponentFixture<EditInstalChauffeEauComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditInstalChauffeEauComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditInstalChauffeEauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
