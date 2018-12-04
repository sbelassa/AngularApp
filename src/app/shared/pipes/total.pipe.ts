import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'total'
})
export class TotalPipe implements PipeTransform {

  transform(value: any, args?: number): any {
    if (value) {
      if (args) {
        return value.totalTTC(args);
      }
        return value.totalHT();
    }
    return null;
  }

}
