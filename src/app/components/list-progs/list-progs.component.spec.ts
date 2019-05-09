import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProgsComponent } from './list-progs.component';

describe('ListProgsComponent', () => {
  let component: ListProgsComponent;
  let fixture: ComponentFixture<ListProgsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListProgsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProgsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
