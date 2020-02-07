import { Component, OnInit, Input, SimpleChanges, OnChanges, EventEmitter, Output, ChangeDetectorRef } from '@angular/core';
import { NewsArticle } from '../news-toolbar/news-toolbar.component';

@Component({
  selector: 'app-news-content',
  templateUrl: './news-content.component.html',
  styleUrls: ['./news-content.component.scss']
})
export class NewsContentComponent implements OnInit, OnChanges {
  @Input() articles: Array<NewsArticle>;
  @Output() deleteItem = new EventEmitter();

  constructor(private ref: ChangeDetectorRef) { }

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

  onDeleteItem(articleToDelete) {
    const index = this.articles.indexOf(articleToDelete, 0);
    if (index > -1) {
      this.articles.splice(index, 1);
    }
    this.ref.markForCheck();
  }

}
