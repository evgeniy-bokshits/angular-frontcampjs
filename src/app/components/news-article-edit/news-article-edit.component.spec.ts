import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsArticleEditComponent } from './news-article-edit.component';

describe('NewsArticleEditComponent', () => {
  let component: NewsArticleEditComponent;
  let fixture: ComponentFixture<NewsArticleEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsArticleEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsArticleEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
