import { Component, OnInit, Input } from '@angular/core';
import { NewsArticle } from '../news-toolbar/news-toolbar.component';

@Component({
  selector: 'app-news-content',
  templateUrl: './news-content.component.html',
  styleUrls: ['./news-content.component.scss']
})
export class NewsContentComponent implements OnInit {
  @Input() articles: Array<NewsArticle>;

  constructor() { }

  ngOnInit() {
  }

}
