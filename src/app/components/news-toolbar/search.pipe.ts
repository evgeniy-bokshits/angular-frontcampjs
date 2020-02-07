import { Pipe, PipeTransform } from '@angular/core';
import { NewsArticle } from './news-toolbar.component';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(arr: NewsArticle[], searchValue: string) {
    if (!searchValue) { return arr; }

    return arr.filter(value => {
      return value.title.toLowerCase().indexOf(searchValue.toLowerCase()) > -1;
    });
  }

}
