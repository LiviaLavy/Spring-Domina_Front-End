import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCapteursComponent } from './list-capteurs.component';

describe('ListCapteursComponent', () => {
  let component: ListCapteursComponent;
  let fixture: ComponentFixture<ListCapteursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCapteursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCapteursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
