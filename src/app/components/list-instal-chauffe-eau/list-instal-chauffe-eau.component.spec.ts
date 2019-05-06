import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListInstalChauffeEauComponent } from './list-instal-chauffe-eau.component';

describe('ListInstalChauffeEauComponent', () => {
  let component: ListInstalChauffeEauComponent;
  let fixture: ComponentFixture<ListInstalChauffeEauComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListInstalChauffeEauComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListInstalChauffeEauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
