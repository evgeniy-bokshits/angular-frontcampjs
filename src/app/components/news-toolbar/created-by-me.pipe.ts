import { Pipe, PipeTransform } from '@angular/core';
import { NewsArticle } from './news-toolbar.component';

@Pipe({
  name: 'createdByMe'
})
export class CreatedByMePipe implements PipeTransform {

  transform(arr: NewsArticle[], searchValue: boolean) {
    if (!searchValue) { return arr; }

    const result = arr.filter(value => {
      return value.author && value.author.indexOf('me') > -1;
    });

    return result;
  }

}
