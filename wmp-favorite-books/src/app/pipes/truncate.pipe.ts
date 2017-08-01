import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, amount: number): any {
    if (value.length > amount) {
      let newString = value.slice(0, amount)
      return `${newString}...`;
    } else {
      return value;
    }
  }

}
