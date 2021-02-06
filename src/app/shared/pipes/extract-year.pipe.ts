import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'extractYear'
})
export class ExtractYearPipe implements PipeTransform {

  transform(value: string, ...args: any): unknown {
    return value.slice(0, 4);
  }

}
