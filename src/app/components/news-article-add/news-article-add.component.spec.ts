import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsArticleAddComponent } from './news-article-add.component';

describe('NewsArticleAddComponent', () => {
  let component: NewsArticleAddComponent;
  let fixture: ComponentFixture<NewsArticleAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsArticleAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsArticleAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
