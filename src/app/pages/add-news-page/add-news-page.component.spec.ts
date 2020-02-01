import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewsPageComponent } from './add-news-page.component';

describe('AddNewsPageComponent', () => {
  let component: AddNewsPageComponent;
  let fixture: ComponentFixture<AddNewsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
