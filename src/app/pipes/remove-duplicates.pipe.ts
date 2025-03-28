import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeDuplicates',
  standalone: false
})
export class RemoveDuplicatesPipe implements PipeTransform {
  result: any = [];

  transform(value: any, ...args: any[]): any {
    value.forEach((item: any) => {
      if(this.result.indexOf(item) < 0) {
        this.result.push(item);
      }
    });
    
    return this.result;
  }

}
