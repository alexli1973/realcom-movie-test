import { Pipe, PipeTransform } from '@angular/core';
import {Movie} from '../interfaces/movie';

@Pipe({
  name: 'searchText'
})
export class SearchTextPipe implements PipeTransform {
  transform(items: Movie[], keys: {'isNumber', 'isString'}, value: string) {
    if (!value) { return items; }
    if (!items) { return []; }
    if (Number(value)) {
      return items.filter(item => item[keys.isNumber].slice(0, 4).includes(value));
    } else {
      return items.filter(item => item.title.toLowerCase().includes(value.toLowerCase()));
    }
  }
}
