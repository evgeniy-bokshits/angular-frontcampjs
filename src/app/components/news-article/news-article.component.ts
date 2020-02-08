import { Component, OnInit, Input, Output } from '@angular/core';
import { NewsArticle } from '../news-toolbar/news-toolbar.component';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-news-article',
  templateUrl: './news-article.component.html',
  styleUrls: ['./news-article.component.scss']
})
export class NewsArticleComponent implements OnInit {
  @Input() article: NewsArticle;
  @Output() deleteItem = new EventEmitter();
  @Output() editItem = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  isAuthorMe(): boolean {
    return this.article.author === 'me';
}

onDeleteItem() {
  const val: any = this.article;
  this.deleteItem.emit(val);
}

onEditItem() {
  const val: any = this.article;
  this.editItem.emit(val);
}

}
