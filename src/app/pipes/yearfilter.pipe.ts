import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'yearfilter'
})
export class YearfilterPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
