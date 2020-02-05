import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { NewsArticle } from '../news-toolbar/news-toolbar.component';

@Component({
  selector: 'app-news-content',
  templateUrl: './news-content.component.html',
  styleUrls: ['./news-content.component.scss']
})
export class NewsContentComponent implements OnInit, OnChanges {
  @Input() articles: Array<NewsArticle>;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      // only run when property "data" changed
      if (propName === 'articles') {
        //  this line will update posts values
        this.articles = changes[propName].currentValue;
      }
    }
  }

}
