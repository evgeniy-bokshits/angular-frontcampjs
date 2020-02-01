import { Component, OnInit, Input } from '@angular/core';
import { NewsArticle } from '../news-toolbar/news-toolbar.component';

@Component({
  selector: 'app-news-article-edit',
  templateUrl: './news-article-edit.component.html',
  styleUrls: ['./news-article-edit.component.scss']
})
export class NewsArticleEditComponent implements OnInit {
  @Input() article: NewsArticle;

  constructor() { }

  ngOnInit() {
  }

}
