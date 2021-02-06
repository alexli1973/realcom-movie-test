import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from '../interfaces/movie';

@Pipe({
  name: 'filterByType'
})
export class FilterByTypePipe implements PipeTransform {

  transform(items: Movie[], value: string): any {
     if (!value.length) {
       return items;
     }
     else {
       return items.filter(item => item.type === value);
     }
  }

}
