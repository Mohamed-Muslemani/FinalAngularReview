import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'agePipe'
})
export class AgePipePipe implements PipeTransform {

  transform(age: number): string {
    return `${age} years old`;
  }
}
