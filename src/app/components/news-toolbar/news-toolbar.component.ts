import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, Input } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { NewsApiService } from 'src/app/core/services/news-api/news-api.services';

export interface NewsSource {
  value: string;
  viewValue: string;
}

export interface NewsArticle {
  title: string;
  url: string;
  publishAt: string;
  author: string;
  description: string;
  urlToImage: string;
  content: string;
}

@Component({
  selector: 'app-news-toolbar',
  templateUrl: './news-toolbar.component.html',
  styleUrls: ['./news-toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class NewsToolbarComponent implements OnInit {
  selected = 'ru';
  textForFilter = 'Clear me';
  sourceNameVal = 'Source Name - ' + this.selected;
  checked = false;

  newsSources: NewsSource[] = [
    { value: 'ru', viewValue: 'Russian' },
    { value: 'us', viewValue: 'USA' },
    { value: 'ua', viewValue: 'Ukraine' }
  ];

  @Input() articles: NewsArticle[] = [];

  constructor(private newsApiService: NewsApiService, private ref: ChangeDetectorRef) { }

  ngOnInit() {
    this.newsApiService.getTopNewsForCountry(this.selected).then(articles => {
    this.articles = articles.articles;
    this.ref.markForCheck();
    });
  }

  onNewsSourChange(val) {
    this.sourceNameVal = 'Source Name - ' + val.value;
    this.newsApiService.getTopNewsForCountry(val.value).then(articles => this.articles = articles.articles);
  }

}
