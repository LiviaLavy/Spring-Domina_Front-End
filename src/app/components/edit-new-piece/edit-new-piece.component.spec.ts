import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditNewPieceComponent } from './edit-new-piece.component';

describe('EditNewPieceComponent', () => {
  let component: EditNewPieceComponent;
  let fixture: ComponentFixture<EditNewPieceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditNewPieceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditNewPieceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
