import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListInstalsComponent } from './list-instals.component';

describe('ListInstalsComponent', () => {
  let component: ListInstalsComponent;
  let fixture: ComponentFixture<ListInstalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListInstalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListInstalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
