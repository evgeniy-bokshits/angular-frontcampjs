import { Component, OnInit, Input } from '@angular/core';
import { NewsArticle } from '../news-toolbar/news-toolbar.component';

@Component({
  selector: 'app-news-article',
  templateUrl: './news-article.component.html',
  styleUrls: ['./news-article.component.scss']
})
export class NewsArticleComponent implements OnInit {
  @Input() article: NewsArticle;

  constructor() { }

  ngOnInit() {
  }

  isAuthorMe(): boolean {
    return this.article.author === 'me';
}

}
