import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAddClientsComponent } from './page-add-clients.component';

describe('PageAddClientsComponent', () => {
  let component: PageAddClientsComponent;
  let fixture: ComponentFixture<PageAddClientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageAddClientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAddClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
