import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListConsosComponent } from './list-consos.component';

describe('ListConsosComponent', () => {
  let component: ListConsosComponent;
  let fixture: ComponentFixture<ListConsosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListConsosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListConsosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
