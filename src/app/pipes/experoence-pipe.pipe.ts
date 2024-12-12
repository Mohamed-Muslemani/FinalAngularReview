import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'experoencePipe'
})
export class ExperoencePipePipe implements PipeTransform {

  transform(experience: number): string {
    if(experience <= 0) {
      return `New Sitter`;
    } else {
      return `${experience} years of experience`
    }
  }

}
