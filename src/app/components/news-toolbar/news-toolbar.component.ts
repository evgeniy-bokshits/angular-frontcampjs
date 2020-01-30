import { Component, OnInit } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';

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
  imgUrl: string;
}

@Component({
  selector: 'app-news-toolbar',
  templateUrl: './news-toolbar.component.html',
  styleUrls: ['./news-toolbar.component.scss']
})
export class NewsToolbarComponent implements OnInit {
  selected = '';
  textForFilter = 'Clear me';
  sourceNameVal = 'Source Name - ' + this.selected;
  checked = false;

  newsSources: NewsSource[] = [
    {value: 'ru', viewValue: 'Russian'},
    {value: 'us', viewValue: 'USA'},
    {value: 'ua', viewValue: 'Ukraine'}
  ];

  articles: NewsArticle[] = [
    {title: 'Мать брошенных в Шереметьево детей рассказала об издевательствах мужа - РИА НОВОСТИ',
     url: 'https://ria.ru/20200128/1563948365.html',
     publishAt: '2020-01-27T22:23:21Z',
     author: '',
     // tslint:disable-next-line:max-line-length
     description: 'Мать двух мальчиков, которых отец оставил с запиской в аэропорту Шереметьево, рассказала телеканалу "360" о ситуации в семье. РИА Новости, 28.01.2020',
     imgUrl: 'https://cdn25.img.ria.ru/images/sharing/article/1563948365.jpg?15635296521580168159'},
     {title: 'Мать брошенных в Шереметьево детей рассказала об издевательствах мужа - РИА НОВОСТИ',
     url: 'https://ria.ru/20200128/1563948365.html',
     publishAt: '2020-01-27T22:23:21Z',
     author: '', description: '',
     imgUrl: 'https://cdn25.img.ria.ru/images/sharing/article/1563948365.jpg?15635296521580168159'},
     {title: 'Мать брошенных в Шереметьево детей рассказала об издевательствах мужа - РИА НОВОСТИ',
     url: 'https://ria.ru/20200128/1563948365.html',
     publishAt: '2020-01-27T22:23:21Z',
     author: '', description: '',
     imgUrl: 'https://cdn25.img.ria.ru/images/sharing/article/1563948365.jpg?15635296521580168159'},
     {title: 'Мать брошенных в Шереметьево детей рассказала об издевательствах мужа - РИА НОВОСТИ',
     url: 'https://ria.ru/20200128/1563948365.html',
     publishAt: '2020-01-27T22:23:21Z',
     author: '', description: '',
     imgUrl: 'https://cdn25.img.ria.ru/images/sharing/article/1563948365.jpg?15635296521580168159'},
     {title: 'Мать брошенных в Шереметьево детей рассказала об издевательствах мужа - РИА НОВОСТИ',
     url: 'https://ria.ru/20200128/1563948365.html',
     publishAt: '2020-01-27T22:23:21Z',
     author: '', description: '',
     imgUrl: 'https://cdn25.img.ria.ru/images/sharing/article/1563948365.jpg?15635296521580168159'}
  ];


  constructor() { }

  ngOnInit() {
  }

  onNewsSourChange(val) {
    this.sourceNameVal = 'Source Name - ' + val.value;
  }

}
