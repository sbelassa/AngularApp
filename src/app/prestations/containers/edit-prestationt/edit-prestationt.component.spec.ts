import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPrestationtComponent } from './edit-prestationt.component';

describe('EditPrestationtComponent', () => {
  let component: EditPrestationtComponent;
  let fixture: ComponentFixture<EditPrestationtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPrestationtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPrestationtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
