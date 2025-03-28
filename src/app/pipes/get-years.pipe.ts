import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getYears',
  standalone: false
})
export class GetYearsPipe implements PipeTransform {
  result: any = [];

  transform(value: any, ...args: any[]): any {
    value.forEach((item: any) => {
      this.result.push(new Date(item.dateCreated).getFullYear());
    });
    
    return this.result;
  }

}
